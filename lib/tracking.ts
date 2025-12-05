// Google Analytics & Ads Tracking Utilities

declare global {
  interface Window {
    gtag: (
      command: 'config' | 'event' | 'js' | 'set',
      targetId: string | Date,
      config?: Record<string, unknown>
    ) => void;
    dataLayer: Record<string, unknown>[];
  }
}

// Track page view (useful for SPA navigation)
export function trackPageView(url: string) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('config', process.env.NEXT_PUBLIC_GA_ID || '', {
      page_path: url,
    });
  }
}

// Track custom event in Google Analytics
export function trackEvent(
  eventName: string,
  eventParams?: Record<string, string | number | boolean>
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
}

// Track Google Ads conversion
export function trackAdsConversion(
  conversionLabel: string,
  value?: number,
  currency: string = 'VND'
) {
  if (typeof window !== 'undefined' && window.gtag) {
    const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
    if (adsId) {
      window.gtag('event', 'conversion', {
        send_to: `${adsId}/${conversionLabel}`,
        value: value,
        currency: currency,
      });
    }
  }
}

// Track form submission (common conversion)
export function trackFormSubmission(
  formName: string,
  formData?: Record<string, string>
) {
  // Track in Google Analytics
  trackEvent('form_submit', {
    form_name: formName,
    ...formData,
  });

  // Also push to dataLayer for GTM
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'form_submission',
      form_name: formName,
      ...formData,
    });
  }
}

// Track contact form submission specifically
export function trackContactFormSubmission(data?: {
  name?: string;
  email?: string;
  phone?: string;
  service?: string;
}) {
  trackFormSubmission('contact_form', {
    form_type: 'contact',
    ...(data?.service && { service: data.service }),
  });

  // Track as lead in GA4
  trackEvent('generate_lead', {
    currency: 'VND',
    value: 0, // Set value if you have one
  });

  // Push to dataLayer for GTM conversion tracking
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'contact_form_submit',
      formData: {
        hasName: !!data?.name,
        hasEmail: !!data?.email,
        hasPhone: !!data?.phone,
        service: data?.service || 'general',
      },
    });
  }
}

// Track button click
export function trackButtonClick(buttonName: string, additionalData?: Record<string, string>) {
  trackEvent('button_click', {
    button_name: buttonName,
    ...additionalData,
  });
}

// Track phone call click
export function trackPhoneClick(phoneNumber: string) {
  trackEvent('phone_click', {
    phone_number: phoneNumber,
  });

  // Push to dataLayer for GTM
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'phone_click',
      phone_number: phoneNumber,
    });
  }
}

// Track scroll depth
export function trackScrollDepth(percentage: number) {
  trackEvent('scroll_depth', {
    percent_scrolled: percentage,
  });
}
