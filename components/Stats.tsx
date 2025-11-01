'use client';

import { useState, useEffect, useRef } from 'react';

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { number: 500, suffix: '+', label: 'Dự án hoàn thành', icon: '🚀' },
    { number: 300, suffix: '+', label: 'Khách hàng tin tưởng', icon: '👥' },
    { number: 98, suffix: '%', label: 'Khách hàng hài lòng', icon: '⭐' },
    { number: 150, suffix: '%', label: 'Tăng trưởng doanh thu', icon: '📈' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const currentRef = sectionRef.current;

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const Counter = ({ end, suffix }: { end: number; suffix: string }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let start = 0;
      const duration = 2000;
      const increment = end / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
      // isVisible is needed for counter logic but ESLint sees it as outer scope
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isVisible, end]);

    return (
      <span>
        {count}
        {suffix}
      </span>
    );
  };

  return (
    <section
      id="stats"
      ref={sectionRef}
      className="py-20 bg-red-600 text-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-[1400px]">
        {/* Section Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Thành Tích Của Chúng Tôi
          </h2>
          <p className="text-lg opacity-95">
            Con số nói lên tất cả - Chúng tôi tự hào về những gì đã đạt được cùng khách hàng
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-6 bg-white/10 rounded-xl hover:bg-white/15 transition-all border border-white/20 hover:border-white/40 hover:scale-105"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-3xl sm:text-4xl font-bold mb-2 group-hover:scale-110 transition-transform">
                <Counter end={stat.number} suffix={stat.suffix} />
              </div>
              <div className="text-sm sm:text-base opacity-90">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 rounded-xl p-8 sm:p-12 border border-white/20">
            <div className="flex items-start gap-4">
              <svg
                className="w-10 h-10 text-white/40 flex-shrink-0"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <div className="flex-1">
                <p className="text-lg sm:text-xl mb-6 leading-relaxed opacity-95">
                  &ldquo;HotDeal Media đã giúp công ty chúng tôi tăng doanh số lên 200% chỉ sau 3 tháng.
                  Đội ngũ chuyên nghiệp, chiến lược rõ ràng và hiệu quả vượt mong đợi.&rdquo;
                </p>
                <div>
                  <div className="font-bold text-lg">Nguyễn Văn A</div>
                  <div className="text-sm opacity-80">CEO - ABC Company</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
