'use client';

import { useTranslations } from 'next-intl';
import { Service } from '@/app/dich-vu/services-data';

export function useServiceTranslations(slug: string): Partial<Service> {
  // Map slug to translation key
  const getServiceKey = (serviceSlug: string): string => {
    const keyMap: Record<string, string> = {
      'quang-cao-google-ads': 'googleAds',
      'thue-tai-khoan-google-ads-vnd': 'rental',
      'thiet-ke-website': 'websiteDesign',
      'thiet-ke-landing-page': 'landingPage',
    };
    return keyMap[serviceSlug] || 'googleAds';
  };

  const serviceKey = getServiceKey(slug);
  const t = useTranslations(`serviceDetailPage.${serviceKey}`);
  const tCommon = useTranslations('common');

  // Build service object from translations
  const translatedService: Partial<Service> = {
    shortName: t('shortName'),
    heroTitle: slug === 'quang-cao-google-ads'
      ? t('hero.heading1')
      : t('hero.heading'),

    heroDescriptionParts: {
      context: t('heroDescription.context'),
      challenge: t('heroDescription.challenge'),
      solution: t('heroDescription.solution'),
    },

    aboutService: {
      title: t('aboutService.title'),
      description: t('aboutService.description'),
      // Only load platforms for services that have them (googleAds, rental)
      platforms: (() => {
        // Only googleAds and rental have platforms
        if (serviceKey !== 'googleAds' && serviceKey !== 'rental') {
          return undefined;
        }

        try {
          const platforms = t.raw('aboutService.platforms');
          if (platforms && typeof platforms === 'object') {
            return [
              {
                name: t('aboutService.platforms.searchAds.name'),
                desc: t('aboutService.platforms.searchAds.desc'),
                icon: '🔍'
              },
              {
                name: t('aboutService.platforms.displayAds.name'),
                desc: t('aboutService.platforms.displayAds.desc'),
                icon: '📺'
              },
              {
                name: t('aboutService.platforms.videoAds.name'),
                desc: t('aboutService.platforms.videoAds.desc'),
                icon: '🎥'
              },
              {
                name: t('aboutService.platforms.shoppingAds.name'),
                desc: t('aboutService.platforms.shoppingAds.desc'),
                icon: '🛍️'
              },
              {
                name: t('aboutService.platforms.appCampaigns.name'),
                desc: t('aboutService.platforms.appCampaigns.desc'),
                icon: '📱'
              },
              {
                name: t('aboutService.platforms.performanceMax.name'),
                desc: t('aboutService.platforms.performanceMax.desc'),
                icon: '🚀'
              },
            ];
          }
          return undefined;
        } catch {
          return undefined;
        }
      })(),
      benefits: t.raw('aboutService.benefits') || [],
      // additionalText - only for googleAds and rental
      additionalText: (() => {
        if (serviceKey !== 'googleAds' && serviceKey !== 'rental') {
          return undefined;
        }
        try {
          return t.raw('aboutService.additionalText') || undefined;
        } catch {
          return undefined;
        }
      })(),
    },

    whyChooseUs: t.raw('whyChooseUs') ? {
      title: t('whyChooseUs.title'),
      description: t('whyChooseUs.description'),
      points: (t.raw('whyChooseUs.points') || []).map((point: any) => ({
        title: point.title,
        description: point.description,
      })),
    } : undefined,

    features: {
      title: t('features.title'),
      // intro - only for googleAds, rental, and landingPage
      intro: (() => {
        if (serviceKey === 'websiteDesign') {
          return undefined;
        }
        try {
          return t.raw('features.intro') || undefined;
        } catch {
          return undefined;
        }
      })(),
      items: (t.raw('features.items') || []).map((item: any) => ({
        name: item.name,
        description: item.description,
      })),
    },

    // accountTypes - only for rental and googleAds
    accountTypes: (() => {
      if (serviceKey !== 'rental' && serviceKey !== 'googleAds') {
        return undefined;
      }
      try {
        return t.raw('accountTypes') ? {
          title: t('accountTypes.title'),
          description: t('accountTypes.description'),
          types: t.raw('accountTypes.invoiceAccount') ? [{
            name: t('accountTypes.invoiceAccount.name'),
            description: t('accountTypes.invoiceAccount.description'),
          }] : [],
          note: t.raw('accountTypes.note') || undefined,
        } : undefined;
      } catch {
        return undefined;
      }
    })(),

    // rentalModel - only for rental and googleAds
    rentalModel: (() => {
      if (serviceKey !== 'rental' && serviceKey !== 'googleAds') {
        return undefined;
      }
      try {
        return t.raw('rentalModel') ? {
          title: t.raw('sections.rentalModel.heading') || 'Mô hình thuê tài khoản',
          points: (t.raw('rentalModel.points') || []).map((point: any) => ({
            title: point.title,
            description: point.description,
          })),
        } : undefined;
      } catch {
        return undefined;
      }
    })(),

    // quickGuide - only for rental and googleAds
    quickGuide: (() => {
      if (serviceKey !== 'rental' && serviceKey !== 'googleAds') {
        return undefined;
      }
      try {
        return t.raw('quickGuide') ? {
          title: t('quickGuide.title'),
          intro: t('quickGuide.intro'),
          steps: t.raw('quickGuide.steps') || [],
        } : undefined;
      } catch {
        return undefined;
      }
    })(),

    // finalCTA - not for websiteDesign (all other services have it)
    finalCTA: (() => {
      if (serviceKey === 'websiteDesign') {
        return undefined;
      }
      try {
        return t.raw('finalCTA') ? {
          title: t('finalCTA.title'),
          description: t('finalCTA.description'),
          bullets: t.raw('finalCTA.bullets') || undefined,
          footer: t('finalCTA.footer'),
        } : undefined;
      } catch {
        return undefined;
      }
    })(),

    process: {
      title: t('process.title'),
      steps: (t.raw('process.steps') || []).map((step: any) => ({
        title: step.title,
        description: step.description,
      })),
      // note - only for googleAds and rental
      note: (() => {
        if (serviceKey !== 'googleAds' && serviceKey !== 'rental') {
          return undefined;
        }
        try {
          return t.raw('process.note') || undefined;
        } catch {
          return undefined;
        }
      })(),
    },

    packages: {
      title: t('packages.title'),
      plans: (t.raw('packages.plans') || []).map((plan: any, index: number) => ({
        name: plan.name,
        price: plan.price,
        features: plan.features || [],
        highlight: index === 1, // Middle plan highlighted
      })),
    },

    benefits: t.raw('benefits') || [],
  };

  return translatedService;
}
