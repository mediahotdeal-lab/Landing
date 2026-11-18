'use client';

import { useState, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { submitContactForm, type ContactFormData } from '@/lib/api';
import { trackContactFormSubmission } from '@/lib/tracking';
import Swal from 'sweetalert2';
import { Turnstile, TurnstileInstance } from '@marsidev/react-turnstile';

interface ValidationErrors {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
  message?: string;
  captcha?: string;
}

interface ContactFormProps {
  defaultService?: string;
  defaultMessage?: string;
  // Prefix for input ids so the form can render twice on one page (section + popup)
  idPrefix?: string;
  onSuccess?: () => void;
}

export default function ContactForm({
  defaultService = '',
  defaultMessage = '',
  idPrefix = '',
  onSuccess,
}: ContactFormProps) {
  const t = useTranslations('contact');
  const initialData = {
    name: '',
    email: '',
    phone: '',
    service: defaultService,
    message: defaultMessage
  };
  const [formData, setFormData] = useState(initialData);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({});
  const [captchaToken, setCaptchaToken] = useState<string>('');
  const turnstileRef = useRef<TurnstileInstance>(null);

  const validateForm = (): boolean => {
    const errors: ValidationErrors = {};

    // Name validation
    if (!formData.name.trim()) {
      errors.name = t('form.validation.nameRequired');
    } else if (formData.name.trim().length < 2) {
      errors.name = t('form.validation.nameMinLength');
    } else if (formData.name.length > 255) {
      errors.name = t('form.validation.nameMaxLength');
    }

    // Email validation
    if (!formData.email.trim()) {
      errors.email = t('form.validation.emailRequired');
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      errors.email = t('form.validation.emailInvalid');
    } else if (formData.email.length > 255) {
      errors.email = t('form.validation.emailMaxLength');
    }

    // Phone validation (Vietnamese format: 10-11 digits)
    if (!formData.phone.trim()) {
      errors.phone = t('form.validation.phoneRequired');
    } else if (!/^[0-9]{10,11}$/.test(formData.phone.replace(/\s/g, ''))) {
      errors.phone = t('form.validation.phoneInvalid');
    } else if (formData.phone.length > 20) {
      errors.phone = t('form.validation.phoneMaxLength');
    }

    // Service validation
    if (!formData.service.trim()) {
      errors.service = t('form.validation.serviceRequired');
    } else if (formData.service.length > 100) {
      errors.service = t('form.validation.serviceMaxLength');
    }

    // Message validation
    if (!formData.message.trim()) {
      errors.message = t('form.validation.messageRequired');
    } else if (formData.message.trim().length < 10) {
      errors.message = t('form.validation.messageMinLength');
    } else if (formData.message.length > 5000) {
      errors.message = t('form.validation.messageMaxLength');
    }

    // Captcha validation
    if (!captchaToken) {
      errors.captcha = 'Vui lòng xác minh bạn không phải là robot';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit form to CRM API
      await submitContactForm(formData as ContactFormData);

      // Track form submission for Google Analytics & Ads
      trackContactFormSubmission({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
      });

      // Success - Show SweetAlert
      await Swal.fire({
        icon: 'success',
        title: t('form.success'),
        text: 'Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất!',
        confirmButtonText: 'OK',
        confirmButtonColor: '#dc2626',
        timer: 3000,
        timerProgressBar: true,
      });

      // Reset form
      setFormData(initialData);
      setValidationErrors({});
      setCaptchaToken('');
      turnstileRef.current?.reset();
      onSuccess?.();
    } catch (error) {
      // Error - Show SweetAlert
      await Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: error instanceof Error ? error.message : 'Có lỗi xảy ra. Vui lòng thử lại.',
        confirmButtonText: 'Đóng',
        confirmButtonColor: '#dc2626',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    // Clear validation error for this field when user starts typing
    if (validationErrors[name as keyof ValidationErrors]) {
      setValidationErrors({
        ...validationErrors,
        [name]: undefined
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor={`${idPrefix}name`} className="block text-sm font-semibold text-gray-700 mb-2">
          {t('form.name')} *
        </label>
        <input
          type="text"
          id={`${idPrefix}name`}
          name="name"
          value={formData.name}
          onChange={handleChange}
          maxLength={255}
          className={`w-full px-4 py-3 rounded-lg border ${validationErrors.name ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition`}
          placeholder={t('form.namePlaceholder')}
        />
        {validationErrors.name && (
          <p className="mt-1 text-sm text-red-600">{validationErrors.name}</p>
        )}
      </div>

      <div>
        <label htmlFor={`${idPrefix}email`} className="block text-sm font-semibold text-gray-700 mb-2">
          {t('form.email')} *
        </label>
        <input
          type="email"
          id={`${idPrefix}email`}
          name="email"
          value={formData.email}
          onChange={handleChange}
          maxLength={255}
          className={`w-full px-4 py-3 rounded-lg border ${validationErrors.email ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition`}
          placeholder={t('form.emailPlaceholder')}
        />
        {validationErrors.email && (
          <p className="mt-1 text-sm text-red-600">{validationErrors.email}</p>
        )}
      </div>

      <div>
        <label htmlFor={`${idPrefix}phone`} className="block text-sm font-semibold text-gray-700 mb-2">
          {t('form.phone')} *
        </label>
        <input
          type="tel"
          id={`${idPrefix}phone`}
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          maxLength={20}
          className={`w-full px-4 py-3 rounded-lg border ${validationErrors.phone ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition`}
          placeholder={t('form.phonePlaceholder')}
        />
        {validationErrors.phone && (
          <p className="mt-1 text-sm text-red-600">{validationErrors.phone}</p>
        )}
      </div>

      <div>
        <label htmlFor={`${idPrefix}service`} className="block text-sm font-semibold text-gray-700 mb-2">
          {t('form.service')} *
        </label>
        <select
          id={`${idPrefix}service`}
          name="service"
          value={formData.service}
          onChange={handleChange}
          className={`w-full px-4 py-3 rounded-lg border ${validationErrors.service ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition`}
        >
          <option value="">{t('form.selectService')}</option>
          <option value="quang-cao-google-ads">{t('form.services.googleAds')}</option>
          <option value="thue-tai-khoan-google-ads-vnd">{t('form.services.googleAdsRental')}</option>
          <option value="thiet-ke-website">{t('form.services.websiteDesign')}</option>
          <option value="thiet-ke-landing-page">{t('form.services.landingPageDesign')}</option>
          <option value="dich-vu-tiktok">{t('form.services.tiktok')}</option>
        </select>
        {validationErrors.service && (
          <p className="mt-1 text-sm text-red-600">{validationErrors.service}</p>
        )}
      </div>

      <div>
        <label htmlFor={`${idPrefix}message`} className="block text-sm font-semibold text-gray-700 mb-2">
          {t('form.message')} *
        </label>
        <textarea
          id={`${idPrefix}message`}
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          maxLength={5000}
          className={`w-full px-4 py-3 rounded-lg border ${validationErrors.message ? 'border-red-500' : 'border-gray-300'} focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition resize-none`}
          placeholder={t('form.messagePlaceholder')}
        />
        {validationErrors.message && (
          <p className="mt-1 text-sm text-red-600">{validationErrors.message}</p>
        )}
      </div>

      {/* Cloudflare Turnstile CAPTCHA */}
      <div>
        <Turnstile
          ref={turnstileRef}
          siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ''}
          onSuccess={(token) => {
            setCaptchaToken(token);
            // Clear captcha error when verified
            if (validationErrors.captcha) {
              setValidationErrors({
                ...validationErrors,
                captcha: undefined
              });
            }
          }}
          onError={() => {
            setCaptchaToken('');
            setValidationErrors({
              ...validationErrors,
              captcha: 'Xác minh CAPTCHA thất bại. Vui lòng thử lại.'
            });
          }}
          onExpire={() => {
            setCaptchaToken('');
            setValidationErrors({
              ...validationErrors,
              captcha: 'CAPTCHA đã hết hạn. Vui lòng xác minh lại.'
            });
          }}
          options={{
            theme: 'light',
            size: 'normal',
          }}
        />
        {validationErrors.captcha && (
          <p className="mt-2 text-sm text-red-600">{validationErrors.captcha}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-red-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-red-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-xl hover:scale-105"
      >
        {isSubmitting ? t('form.submitting') : t('form.submit')}
      </button>
    </form>
  );
}
