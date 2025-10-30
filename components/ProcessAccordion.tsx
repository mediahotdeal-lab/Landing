'use client';

import { useState } from 'react';
import Link from 'next/link';

interface ProcessStep {
  title: string;
  description: string;
}

interface ProcessAccordionProps {
  title: string;
  steps: ProcessStep[];
}

export default function ProcessAccordion({ title, steps }: ProcessAccordionProps) {
  const [openStep, setOpenStep] = useState<number | null>(null);

  const toggleStep = (index: number) => {
    setOpenStep(openStep === index ? null : index);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-red-600 to-red-700 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Title & Description */}
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-red-50 mb-6 sm:mb-8 leading-relaxed">
              Dịch vụ chuyên nghiệp, đội ngũ tận tâm và giải pháp tối ưu là điều khiến chúng tôi trở thành lựa chọn ưu tiên.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 bg-white text-red-600 px-8 py-4 rounded-xl font-semibold hover:bg-red-50 transition-all hover:shadow-lg hover:scale-105"
            >
              <span>Liên hệ với chúng tôi</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
          </div>

          {/* Right Column - Process Steps */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                onClick={() => toggleStep(index)}
                className="group bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-xl overflow-hidden hover:bg-white/20 hover:border-white/40 transition-all cursor-pointer"
              >
                <div className="flex items-start gap-3 sm:gap-4 p-4 sm:p-6">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <span className="text-xl sm:text-2xl font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold flex items-center justify-between gap-2">
                      <span>{step.title}</span>
                      <svg
                        className={`w-4 h-4 sm:w-5 sm:h-5 opacity-50 group-hover:opacity-100 transition-all flex-shrink-0 ${
                          openStep === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </h3>
                  </div>
                </div>

                {/* Collapsible Content */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openStep === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                    <p className="text-sm sm:text-base text-red-50 leading-relaxed pl-10 sm:pl-14 md:pl-16">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
