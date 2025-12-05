'use client';

import Script from 'next/script';

interface GoogleAdsTrackingProps {
  adsId: string;
}

export function GoogleAdsTracking({ adsId }: GoogleAdsTrackingProps) {
  if (!adsId) return null;

  return (
    <>
      {/* Google Ads Tracking */}
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${adsId}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-ads"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${adsId}');
          `,
        }}
      />
    </>
  );
}

// Track Google Ads conversion
export function trackConversion(
  conversionId: string,
  conversionLabel: string,
  value?: number,
  currency?: string
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${conversionId}/${conversionLabel}`,
      value: value,
      currency: currency || 'VND',
    });
  }
}

// Track phone call conversion
export function trackPhoneCallConversion(
  conversionId: string,
  conversionLabel: string,
  phoneNumber: string
) {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', 'conversion', {
      send_to: `${conversionId}/${conversionLabel}`,
      phone_conversion_number: phoneNumber,
    });
  }
}
