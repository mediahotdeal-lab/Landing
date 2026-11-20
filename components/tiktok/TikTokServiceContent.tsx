'use client';

import { useState, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { openRegisterForm } from '@/components/RegisterFormModal';
import HeroVisual from './HeroVisual';
import RevenueCarousel from './RevenueCarousel';
import { Reveal, SectionLabel, ArrowRight, TikTokTile, primaryButtonClass } from './shared';

const SERVICE_SLUG = 'dich-vu-tiktok';
const CONTAINER = 'container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]';

interface TextItem {
  title: string;
  description: string;
}

interface TeamMember {
  name: string;
  role: string;
  experience: string;
  note: string;
}

interface FaqItem {
  question: string;
  answer: string;
}

const SERVICE_IMAGES = [1, 2, 3, 4, 5].map((n) => `/images/tiktok/services/goi-${n}.jpg`);

const TEAM_PHOTOS = [
  '/images/tiktok/team/ngoc-tram.jpg',
  '/images/tiktok/team/phan-nguyen-manh-cuong.jpg',
  '/images/tiktok/team/nguyen-tran-hoang.jpg',
  '/images/tiktok/team/phan-thi-tra-my.jpg',
  '/images/tiktok/team/nguyen-cao-tuyet-nhi.jpg',
];

const INDUSTRY_ICONS = [
  'my-pham',
  'thoi-trang',
  'gia-dung',
  'thuc-pham',
  'me-va-be',
  'cong-nghe',
  'nha-hang-spa',
].map((name) => `/images/tiktok/industries/${name}.png`);

/* ---------- Icons ---------- */

const heroIcons: ReactNode[] = [
  <svg key="koc" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
    <circle cx="9" cy="7" r="4" />
    <path d="M1 20c0-4.1 3.6-7 8-7s8 2.9 8 7v1H1v-1z" />
    <circle cx="17.5" cy="8.5" r="3" />
    <path d="M15.6 14.1c3.8.3 7.4 2.3 7.4 6.2V21h-4.4v-.7c0-2.5-1-4.6-3-6.2z" />
  </svg>,
  <svg key="shop" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round">
    <path d="M5.5 7.5h13l1 13.5h-15l1-13.5z" />
    <path d="M9 7.5V6a3 3 0 0 1 6 0v1.5" />
    <path d="M9.5 13.5l2 2 3.5-3.5" />
  </svg>,
  <svg key="chart" className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
    <rect x="2.5" y="13" width="5" height="8.5" rx="1" />
    <rect x="9.5" y="8.5" width="5" height="13" rx="1" />
    <rect x="16.5" y="3" width="5" height="18.5" rx="1" />
  </svg>,
];

const stepIcons: ReactNode[] = [
  <svg key="chat" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h15a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-8l-5 4v-4H4a3 3 0 0 1-3-3V9a3 3 0 0 1 3-3z" />
    <path d="M22 11h5a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-1v4l-5-4h-5a3 3 0 0 1-3-3v-2" />
    <circle cx="7" cy="13" r="0.6" fill="currentColor" />
    <circle cx="11.5" cy="13" r="0.6" fill="currentColor" />
    <circle cx="16" cy="13" r="0.6" fill="currentColor" />
  </svg>,
  <svg key="bulb" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a7 7 0 0 0-4.2 12.6c.7.6 1.2 1.4 1.2 2.4v1h6v-1c0-1 .5-1.8 1.2-2.4A7 7 0 0 0 16 8z" />
    <path d="M13 27h6M14 30h4" />
    <path d="M16 2v2.5M6 6l1.8 1.8M26 6l-1.8 1.8M2.5 15H5M27 15h2.5" />
    <path d="M14.5 18.5l1.5-3 1.5 3" />
  </svg>,
  <svg key="calendar" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="6" width="26" height="23" rx="3" />
    <path d="M3 12h26M10 3v6M22 3v6" />
    <path d="M9 17h2M15 17h2M21 17h2M9 22h2M15 22h2M21 22h2" />
  </svg>,
  <svg key="rocket" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 5c4-2 8-2 8-2s0 4-2 8l-8 8-6-6 8-8z" />
    <path d="M11 13H6l-3 4 6 1" />
    <path d="M19 21v5l-4 3-1-6" />
    <circle cx="20.5" cy="11.5" r="2" />
    <path d="M8 22c-2 1-3 5-3 5s4-1 5-3" />
  </svg>,
  <svg key="report" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="18" width="6" height="11" rx="1.5" />
    <rect x="13" y="12" width="6" height="17" rx="1.5" />
    <rect x="23" y="4" width="6" height="25" rx="1.5" />
  </svg>,
];

/* ---------- Sections ---------- */

function HeroSection() {
  const t = useTranslations('tiktokPage.hero');
  const highlights = t.raw('highlights') as string[];

  return (
    <section className="relative overflow-hidden bg-white pt-16">
      <HeroVisual />

      <div className={`${CONTAINER} relative`}>
        <div className="flex items-center py-10 lg:py-8 lg:min-h-[28.2vw] lg:w-[50%] lg:pr-8">
          <div>
            <Reveal>
              <span className="tt-shine inline-flex rounded-full bg-gradient-to-r from-red-600 to-red-700 px-5 py-2 text-xs sm:text-sm font-bold uppercase tracking-wide text-white shadow-[0_8px_20px_rgba(220,38,38,0.3)]">
                {t('badge')}
              </span>
            </Reveal>

            <Reveal delay={100}>
              <h1 className="mt-5 text-[28px] sm:text-4xl lg:text-[26px] xl:text-[36px] font-extrabold leading-[1.18] text-gray-900">
                {t('titlePrefix')} <span className="text-red-600">{t('titleHighlight')}</span>
                <br />
                <span className="lg:whitespace-nowrap">{t('titleLine2')}</span>
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mt-4 max-w-xl text-base xl:text-lg leading-relaxed text-gray-600">
                {t('description')}
              </p>
            </Reveal>

            <Reveal delay={300} className="mt-7 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => openRegisterForm({ service: SERVICE_SLUG })}
                className={primaryButtonClass}
              >
                {t('cta')}
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-3">
              {highlights.map((text, i) => (
                <Reveal key={text} delay={400 + i * 100} variant="zoom">
                  <div className="group flex items-center gap-3">
                    <span className="text-red-600 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      {heroIcons[i]}
                    </span>
                    <span className="text-sm leading-snug text-gray-700">{text}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const t = useTranslations('tiktokPage.services');
  const items = t.raw('items') as TextItem[];

  return (
    <section className="relative py-12 lg:py-16">
      <div className={`${CONTAINER} grid gap-10 xl:grid-cols-[310px_minmax(0,1fr)] xl:items-center`}>
        <Reveal variant="left">
          <SectionLabel>{t('label')}</SectionLabel>
          <h2 className="mt-3 text-[28px] lg:text-[30px] font-extrabold leading-tight text-gray-900">{t('title')}</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">{t('description')}</p>
          <button
            type="button"
            onClick={() => openRegisterForm({ service: SERVICE_SLUG })}
            className={`${primaryButtonClass} mt-7`}
          >
            {t('cta')}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 100} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-gradient-to-b from-white to-[#fff4f6] shadow-[0_8px_24px_rgba(220,38,38,0.08)] ring-1 ring-red-100/70 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(220,38,38,0.18)]">
                <div className="relative aspect-[2.1/1] overflow-hidden">
                  <Image
                    src={SERVICE_IMAGES[i]}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 220px, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="relative flex flex-1 flex-col px-3 pb-4 pt-7 sm:px-4 sm:pb-5">
                  <span className="absolute -top-4 left-3 flex h-8 w-8 items-center justify-center rounded-full bg-red-600 text-xs font-bold text-white ring-[3px] ring-white shadow-md transition-transform duration-300 group-hover:scale-110">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-[14px] sm:text-[15px] font-bold leading-snug text-gray-900 transition-colors group-hover:text-red-600 lg:min-h-[2.6em]">
                    {item.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[13px] leading-relaxed text-gray-600">{item.description}</p>
                  <button
                    type="button"
                    onClick={() =>
                      openRegisterForm({
                        service: SERVICE_SLUG,
                        message: t('messageTemplate', { service: item.title }),
                      })
                    }
                    className="mt-4 inline-flex items-center gap-1 self-start whitespace-nowrap text-[12px] sm:text-[13px] font-bold text-red-600 transition-all hover:gap-2"
                  >
                    {t('cta')}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const t = useTranslations('tiktokPage.process');
  const steps = t.raw('steps') as TextItem[];

  return (
    <section className="relative py-12 lg:py-16">
      <div className={CONTAINER}>
        <Reveal className="text-center">
          <SectionLabel center>{t('label')}</SectionLabel>
          <h2 className="mt-3 text-[28px] lg:text-[30px] font-extrabold text-gray-900">{t('title')}</h2>
        </Reveal>

        <ol className="mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-6 lg:gap-x-10">
          {steps.map((step, i) => (
            <li key={step.title} className="relative">
              <Reveal delay={i * 150} variant="zoom" className="group flex flex-col items-center text-center">
                <div className="flex items-center gap-4">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white shadow-[0_6px_16px_rgba(220,38,38,0.35)] transition-transform duration-300 group-hover:scale-110">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="h-10 w-10 text-gray-800 transition-all duration-300 group-hover:-translate-y-1 group-hover:text-red-600">
                    {stepIcons[i]}
                  </span>
                </div>
                <h3 className="mt-4 text-[15px] font-bold text-gray-900">{step.title}</h3>
                <p className="mt-1 max-w-[200px] text-sm leading-snug text-gray-600">{step.description}</p>
              </Reveal>

              {i < steps.length - 1 && (
                <span
                  className="tt-arrow-flow absolute top-2.5 -right-8 hidden lg:block text-red-500"
                  style={{ animationDelay: `${i * 0.2}s` }}
                  aria-hidden="true"
                >
                  <ArrowRight className="w-6 h-6" />
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function TeamSection() {
  const t = useTranslations('tiktokPage.team');
  const members = t.raw('members') as TeamMember[];

  return (
    <section className="relative py-12 lg:py-16">
      <div className={`${CONTAINER} grid gap-10 xl:grid-cols-[300px_minmax(0,1fr)] xl:items-center`}>
        <Reveal variant="left">
          <SectionLabel>{t('label')}</SectionLabel>
          <h2 className="mt-3 text-[28px] lg:text-[30px] font-extrabold leading-tight text-gray-900">{t('title')}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-gray-700">{t('description')}</p>
          <Link href="/ve-chung-toi" className={`${primaryButtonClass} mt-7`}>
            {t('cta')}
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {members.map((member, i) => (
            <Reveal key={member.name} delay={i * 100} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_8px_24px_rgba(0,0,0,0.06)] ring-1 ring-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(220,38,38,0.16)]">
                <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-gray-50 to-gray-200">
                  <Image
                    src={TEAM_PHOTOS[i]}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    sizes="(min-width: 1024px) 220px, 50vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-red-600 transition-transform duration-500 group-hover:scale-x-100" />
                </div>
                <div className="flex flex-1 flex-col items-center px-3 py-4 text-center">
                  <h3 className="text-[14px] font-bold leading-snug text-gray-900">{member.name}</h3>
                  <p className="mt-1 text-[13px] text-gray-600">{member.role}</p>
                  {member.experience && <p className="mt-0.5 text-[12px] text-gray-500">{member.experience}</p>}
                  {member.note && <p className="text-[12px] text-gray-500">{member.note}</p>}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function GrowthGraphic() {
  const bars = [18, 28, 40, 56, 74];
  return (
    <svg viewBox="0 0 150 110" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="tt-bar-gradient" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ef4444" />
          <stop offset="100%" stopColor="#b91c1c" />
        </linearGradient>
      </defs>
      {bars.map((h, i) => (
        <rect
          key={i}
          className="tt-bar"
          style={{ transitionDelay: `${200 + i * 120}ms` }}
          x={62 + i * 17}
          y={108 - h}
          width="12"
          height={h}
          rx="2"
          fill="url(#tt-bar-gradient)"
        />
      ))}
      <path className="tt-draw" d="M4 92 C 40 80, 70 58, 132 12" fill="none" stroke="#dc2626" strokeWidth="5" strokeLinecap="round" />
      <path className="tt-draw" d="M116 10 L136 9 L131 28" fill="none" stroke="#dc2626" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function IndustriesSection() {
  const t = useTranslations('tiktokPage.industries');
  const tRevenue = useTranslations('tiktokPage.revenue');
  const items = t.raw('items') as string[];

  return (
    <section className="relative py-12 lg:py-16">
      <div className={`${CONTAINER} grid gap-10 lg:grid-cols-2 xl:grid-cols-[220px_minmax(0,1.15fr)_minmax(0,1fr)] xl:items-center`}>
        <Reveal variant="left" className="lg:col-span-2 xl:col-span-1">
          <SectionLabel>{t('label')}</SectionLabel>
          <h2 className="mt-3 text-[28px] lg:text-[30px] font-extrabold leading-tight text-gray-900">
            <span className="text-red-600">{t('titleNumber')}</span> {t('title')}
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {items.map((name, i) => (
            <Reveal key={name} delay={i * 80} variant="zoom" className={i === items.length - 1 ? 'col-span-2' : ''}>
              <div className="group flex h-full min-h-[150px] flex-col items-center justify-center gap-2 rounded-2xl bg-white px-3 py-4 text-center shadow-[0_8px_24px_rgba(220,38,38,0.08)] ring-1 ring-red-50 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_16px_32px_rgba(220,38,38,0.16)] hover:ring-red-200">
                <Image
                  src={INDUSTRY_ICONS[i]}
                  alt=""
                  width={64}
                  height={64}
                  className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6"
                />
                <span className="text-sm font-semibold leading-snug text-gray-800">{name}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal variant="right">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#ffe8ed] via-white to-[#ffe1e8] p-5 sm:p-6 shadow-[0_12px_40px_rgba(220,38,38,0.14)] ring-1 ring-red-100">
            <div className="absolute right-3 top-2 h-[80px] w-[110px] sm:h-[110px] sm:w-[150px]">
              <GrowthGraphic />
            </div>
            <h2 className="relative max-w-[62%] text-2xl lg:text-[26px] font-extrabold leading-tight text-gray-900">
              {tRevenue('title')}
            </h2>
            <div className="relative mt-6">
              <RevenueCarousel />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function FaqSection() {
  const t = useTranslations('tiktokPage.faq');
  const items = t.raw('items') as FaqItem[];
  const [openItems, setOpenItems] = useState<boolean[]>(() => items.map(() => false));
  const allOpen = openItems.every(Boolean);
  const half = Math.ceil(items.length / 2);
  const columns = [items.slice(0, half), items.slice(half)];

  const toggle = (index: number) =>
    setOpenItems((prev) => prev.map((open, i) => (i === index ? !open : open)));

  return (
    <section className="relative py-12 lg:py-16">
      <div className={`${CONTAINER} grid gap-10 xl:grid-cols-[300px_minmax(0,1fr)] xl:items-start`}>
        <Reveal variant="left">
          <SectionLabel>{t('label')}</SectionLabel>
          <h2 className="mt-3 text-[28px] lg:text-[30px] font-extrabold leading-tight text-gray-900">{t('title')}</h2>
          <p className="mt-4 text-[15px] leading-relaxed text-gray-700">{t('description')}</p>
          <button
            type="button"
            onClick={() => setOpenItems(items.map(() => !allOpen))}
            className={`${primaryButtonClass} mt-7 px-6 py-3 text-sm`}
          >
            {allOpen ? t('collapseAll') : t('viewAll')}
            <ArrowRight className={`w-4 h-4 transition-transform ${allOpen ? '-rotate-90' : 'group-hover:translate-x-1'}`} />
          </button>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-2 md:items-start">
          {columns.map((column, c) => (
            <div key={c} className="flex flex-col gap-4">
              {column.map((item, j) => {
                const index = c * half + j;
                const isOpen = openItems[index];
                return (
                  <Reveal key={item.question} delay={index * 80}>
                    <div
                      className={`rounded-xl bg-white shadow-[0_6px_20px_rgba(0,0,0,0.05)] ring-1 transition-all duration-300 ${
                        isOpen ? 'ring-red-200 shadow-[0_12px_28px_rgba(220,38,38,0.12)]' : 'ring-gray-100 hover:ring-red-100'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggle(index)}
                        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                        aria-expanded={isOpen}
                        aria-controls={`tiktok-faq-${index}`}
                      >
                        <span className={`text-[15px] font-semibold transition-colors ${isOpen ? 'text-red-600' : 'text-gray-900'}`}>
                          {item.question}
                        </span>
                        <span
                          className={`relative h-5 w-5 shrink-0 text-red-600 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                          aria-hidden="true"
                        >
                          <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded bg-current" />
                          <span className="absolute left-1/2 top-0 h-5 w-0.5 -translate-x-1/2 rounded bg-current" />
                        </span>
                      </button>
                      <div
                        id={`tiktok-faq-${index}`}
                        className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                      >
                        <div className="overflow-hidden">
                          <p className="px-5 pb-5 text-sm leading-relaxed text-gray-600">{item.answer}</p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaSection() {
  const t = useTranslations('tiktokPage.cta');

  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-red-700 via-red-600 to-red-700">
      {/* Silk-like light streaks */}
      <div className="tt-streak pointer-events-none absolute -inset-y-10 left-[8%] w-[38%] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div
        className="tt-streak pointer-events-none absolute -inset-y-10 right-[4%] w-[30%] bg-gradient-to-r from-transparent via-red-300/20 to-transparent"
        style={{ animationDelay: '-4s' }}
      />
      <div className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 rounded-full bg-red-400/20 blur-3xl" />

      <div className={`${CONTAINER} relative flex flex-col items-center gap-8 py-10 text-center md:flex-row md:text-left lg:py-12`}>
        <Reveal variant="zoom">
          <TikTokTile size={104} className="tt-float-3d" />
        </Reveal>
        <Reveal delay={150} className="flex-1 md:pl-6">
          <h2 className="text-2xl sm:text-[28px] lg:text-[30px] font-extrabold uppercase leading-tight text-white">
            {t('titleLine1')}
            <br className="hidden md:block" /> {t('titleLine2')}
          </h2>
          <p className="mt-3 text-base lg:text-lg text-red-50">{t('description')}</p>
        </Reveal>
        <Reveal delay={300} variant="right">
          <button
            type="button"
            onClick={() => openRegisterForm({ service: SERVICE_SLUG })}
            className="tt-shine group inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-gray-900 shadow-[0_12px_30px_rgba(0,0,0,0.2)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(0,0,0,0.28)]"
          >
            {t('button')}
            <ArrowRight className="w-5 h-5 text-red-600 transition-transform group-hover:translate-x-1" />
          </button>
        </Reveal>
      </div>
    </section>
  );
}

export default function TikTokServiceContent() {
  return (
    <main>
      <HeroSection />
      <div className="relative overflow-hidden bg-gradient-to-b from-[#fdecf1] via-[#fff7f9] to-[#fdecf1]">
        <div className="pointer-events-none absolute -left-40 top-[8%] h-96 w-96 rounded-full bg-red-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 top-[35%] h-96 w-96 rounded-full bg-pink-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-40 top-[70%] h-96 w-96 rounded-full bg-red-200/25 blur-3xl" />
        <ServicesSection />
        <ProcessSection />
        <TeamSection />
        <IndustriesSection />
        <FaqSection />
      </div>
      <CtaSection />
    </main>
  );
}
