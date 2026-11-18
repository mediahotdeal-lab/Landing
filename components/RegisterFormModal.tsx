'use client';

import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import ContactForm from './ContactForm';

const OPEN_EVENT = 'hotdeal:open-register-form';

interface OpenRegisterFormOptions {
  service?: string;
  message?: string;
}

// Any component can open the popup without sharing state with FloatingContact
export function openRegisterForm(options: OpenRegisterFormOptions = {}) {
  window.dispatchEvent(new CustomEvent<OpenRegisterFormOptions>(OPEN_EVENT, { detail: options }));
}

export default function RegisterFormModal() {
  const t = useTranslations('registerModal');
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<OpenRegisterFormOptions>({});
  // Remount the form on every open so it picks up the requested service/message
  const [formKey, setFormKey] = useState(0);

  useEffect(() => {
    const handleOpen = (e: Event) => {
      setOptions((e as CustomEvent<OpenRegisterFormOptions>).detail || {});
      setFormKey((key) => key + 1);
      setIsOpen(true);
    };
    window.addEventListener(OPEN_EVENT, handleOpen);
    return () => window.removeEventListener(OPEN_EVENT, handleOpen);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="register-modal-title"
    >
      <div
        className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm animate-modal-fade"
        onClick={() => setIsOpen(false)}
      />

      <div className="relative w-full max-w-lg max-h-[calc(100vh-2rem)] overflow-y-auto bg-white rounded-2xl shadow-2xl animate-modal-pop">
        <div className="relative overflow-hidden bg-gradient-to-r from-red-600 to-red-700 px-6 sm:px-8 py-6 text-white">
          <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10" />
          <div className="absolute right-16 -bottom-12 w-28 h-28 rounded-full bg-white/10" />
          <h2 id="register-modal-title" className="relative text-2xl font-bold">
            {t('title')}
          </h2>
          <p className="relative mt-1 text-sm text-red-50">{t('description')}</p>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 w-9 h-9 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 hover:rotate-90 transition-all duration-300"
            aria-label={t('close')}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="px-6 sm:px-8 py-6">
          <ContactForm
            key={formKey}
            idPrefix="register-"
            defaultService={options.service}
            defaultMessage={options.message}
            onSuccess={() => setIsOpen(false)}
          />
        </div>
      </div>
    </div>
  );
}
