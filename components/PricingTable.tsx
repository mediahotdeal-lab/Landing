interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  highlight?: boolean;
}

interface PricingTier {
  fee: string;
  budget: string;
}

interface PricingTableProps {
  plans?: PricingPlan[];
  tiers?: PricingTier[];
}

export default function PricingTable({ plans, tiers }: PricingTableProps) {
  // If plans are provided (new format), render pricing cards
  if (plans && plans.length > 0) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
        {plans.map((plan, index) => (
          <div key={index} className="group relative">
            {/* Highlight badge for popular package */}
            {plan.highlight && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  PHỔ BIẾN NHẤT
                </div>
              </div>
            )}

            {/* Glow effect */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r from-red-600 to-pink-600 rounded-2xl blur ${plan.highlight ? 'opacity-20' : 'opacity-0'} group-hover:opacity-20 transition duration-500`}></div>

            {/* Card */}
            <div className={`relative bg-white rounded-2xl p-6 sm:p-8 border-2 ${plan.highlight ? 'border-red-400 shadow-xl' : 'border-gray-200 shadow-sm'} group-hover:border-red-400 group-hover:shadow-xl transition-all duration-300 h-full flex flex-col`}>
              {/* Plan name */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">{plan.name}</h3>

              {/* Price */}
              <div className="mb-6">
                <div className="text-2xl sm:text-2xl font-black bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                  {plan.price}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button className={`w-full py-3 px-6 rounded-xl font-bold transition-all duration-300 ${plan.highlight ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white shadow-lg hover:shadow-xl hover:scale-105' : 'bg-gray-100 text-gray-900 hover:bg-gradient-to-r hover:from-red-600 hover:to-pink-600 hover:text-white'}`}>
                Liên hệ ngay
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Otherwise render tiers table (old format)
  if (!tiers || tiers.length === 0) {
    return null;
  }
  return (
    <div className="max-w-5xl mx-auto">
      {/* Table with premium styling */}
      <div className="relative group">
        {/* Glowing background effect - reduced */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-red-600 via-pink-600 to-red-600 rounded-2xl blur opacity-5 group-hover:opacity-10 transition-all duration-500"></div>

        <div className="relative bg-white rounded-2xl overflow-hidden shadow-md border-2 border-red-200">
          {/* Decorative top gradient */}
          <div className="h-2 bg-gradient-to-r from-red-500 via-pink-500 to-red-500"></div>

          {/* Header Row with gradient */}
          <div className="grid grid-cols-2 bg-gradient-to-br from-red-50 via-pink-50 to-red-50">
            <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-center border-r border-red-200/50">
              <div className="inline-flex items-center gap-1 sm:gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                <span className="font-bold text-sm sm:text-base md:text-lg text-red-600 tracking-wide">MỐC PHÍ</span>
              </div>
            </div>
            <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-center">
              <div className="inline-flex items-center gap-1 sm:gap-2">
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
                <span className="font-bold text-sm sm:text-base md:text-lg text-red-600 tracking-wide">NGÂN SÁCH</span>
              </div>
            </div>
          </div>

          {/* Data Rows with hover effects */}
          <div className="divide-y divide-red-100">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className="grid grid-cols-2 group/row hover:bg-gradient-to-r hover:from-red-50 hover:via-pink-50 hover:to-red-50 transition-all duration-300"
              >
                <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-center border-r border-red-100/50 group-hover/row:border-red-200/50 transition-colors">
                  <div className="inline-flex items-center justify-center">
                    <span className="text-xl sm:text-2xl md:text-3xl font-black bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent group-hover/row:scale-110 transition-transform duration-300">
                      {tier.fee}
                    </span>
                  </div>
                </div>
                <div className="px-4 sm:px-6 md:px-8 py-4 sm:py-5 md:py-6 text-center">
                  <span className="text-sm sm:text-base font-semibold text-gray-700 group-hover/row:text-gray-900 transition-colors">
                    {tier.budget}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Info with modern card style */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {[
          { icon: '🎯', text: 'Phù hợp với mọi ngành hàng', color: 'from-blue-500 to-cyan-500' },
          { icon: '💎', text: 'Dịch vụ minh bạch, rõ ràng', color: 'from-purple-500 to-pink-500' },
          { icon: '🛡️', text: 'Nói "Không" với vi phạm pháp luật', color: 'from-red-500 to-orange-500' },
          { icon: '⚡', text: 'Hỗ trợ vấn đề tài khoản tạm ngưng', color: 'from-yellow-500 to-orange-500' },
          { icon: '📄', text: 'Xuất hóa đơn VAT đầy đủ', color: 'from-green-500 to-emerald-500' },
        ].map((item, index) => (
          <div
            key={index}
            className="group/card relative"
          >
            {/* Glow effect */}
            <div className={`absolute -inset-0.5 bg-gradient-to-r ${item.color} rounded-2xl blur opacity-0 group-hover/card:opacity-20 transition duration-300`}></div>

            <div className="relative flex flex-col items-center text-center gap-2 sm:gap-3 bg-white p-4 sm:p-6 rounded-2xl border-2 border-gray-200 hover:border-red-300 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
              <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-2xl sm:text-3xl shadow-lg group-hover/card:scale-110 group-hover/card:rotate-3 transition-transform duration-300`}>
                {item.icon}
              </div>
              <span className="text-xs sm:text-sm md:text-base text-gray-700 group-hover/card:text-gray-900 font-semibold transition-colors leading-relaxed">
                {item.text}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
