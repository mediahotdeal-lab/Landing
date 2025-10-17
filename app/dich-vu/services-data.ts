export interface Service {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  features: {
    title: string;
    items: { name: string; description: string }[];
  };
  process: {
    title: string;
    steps: { title: string; description: string }[];
  };
  packages: {
    title: string;
    plans: {
      name: string;
      price: string;
      features: string[];
      highlight?: boolean;
    }[];
  };
  benefits: string[];
}

export const services: Service[] = [
  {
    slug: 'quang-cao-google-ads',
    name: 'Dịch vụ Quảng Cáo Google Ads',
    shortName: 'Google Ads',
    icon: '🎯',
    description: 'Thiết lập và tối ưu hóa chiến dịch quảng cáo Google Ads hiệu quả, giúp doanh nghiệp tiếp cận đúng khách hàng tiềm năng.',
    heroTitle: 'Dịch Vụ Quảng Cáo Google Ads Chuyên Nghiệp',
    heroDescription: 'Chúng tôi giúp bạn thiết lập và tối ưu hóa chiến dịch Google Ads để đạt ROI tối đa với chi phí hợp lý nhất.',
    features: {
      title: 'Các Loại Chiến Dịch',
      items: [
        { name: 'Search Ads', description: 'Quảng cáo tìm kiếm trên Google Search' },
        { name: 'Display Ads', description: 'Quảng cáo hiển thị trên mạng đối tác Google' },
        { name: 'YouTube Ads', description: 'Quảng cáo video trên YouTube' },
        { name: 'Shopping Ads', description: 'Quảng cáo sản phẩm cho E-commerce' },
        { name: 'App Campaigns', description: 'Quảng cáo ứng dụng di động' },
        { name: 'Performance Max', description: 'Chiến dịch tự động tối ưu hiệu suất' },
      ],
    },
    process: {
      title: 'Quy Trình Làm Việc',
      steps: [
        { title: 'Nghiên cứu & Tư vấn', description: 'Phân tích thị trường, đối thủ và xác định mục tiêu' },
        { title: 'Lập kế hoạch', description: 'Xây dựng chiến lược quảng cáo phù hợp' },
        { title: 'Thiết lập chiến dịch', description: 'Setup tài khoản, cấu trúc chiến dịch' },
        { title: 'Giám sát & Tối ưu', description: 'Theo dõi và điều chỉnh liên tục' },
        { title: 'Báo cáo định kỳ', description: 'Report chi tiết hiệu quả chiến dịch' },
      ],
    },
    packages: {
      title: 'Gói Dịch Vụ',
      plans: [
        {
          name: 'Gói Setup',
          price: '1.500.000 VNĐ',
          features: [
            'Thiết lập tài khoản Google Ads',
            'Nghiên cứu từ khóa cơ bản',
            'Tạo 1-2 chiến dịch',
            'Hướng dẫn sử dụng',
          ],
        },
        {
          name: 'Gói Chăm sóc',
          price: '2.000.000 VNĐ/tháng',
          features: [
            'Tất cả tính năng gói Setup',
            'Tối ưu chiến dịch hàng tuần',
            'Báo cáo chi tiết hàng tháng',
            'Tư vấn chiến lược',
          ],
          highlight: true,
        },
        {
          name: 'Gói Đặc biệt',
          price: '7-3% chi phí quảng cáo',
          features: [
            'Tất cả tính năng gói Chăm sóc',
            'Quản lý nhiều chiến dịch',
            'Tối ưu A/B testing',
            'Hỗ trợ 24/7',
          ],
        },
      ],
    },
    benefits: [
      'Tăng traffic website chất lượng cao',
      'Tối ưu chi phí quảng cáo hiệu quả',
      'Đo lường ROI chính xác',
      'Tiếp cận đúng khách hàng mục tiêu',
    ],
  },
  {
    slug: 'thue-tai-khoan-google-ads-vnd',
    name: 'Dịch vụ Thuê Tài Khoản Google Ads VNĐ',
    shortName: 'Tài khoản Google Ads VNĐ',
    icon: '💳',
    description: 'Cung cấp tài khoản Google Ads thanh toán bằng VNĐ với độ tin cậy cao, giúp doanh nghiệp Việt Nam dễ dàng thanh toán và quản lý ngân sách quảng cáo hiệu quả.',
    heroTitle: 'Thuê Tài Khoản Google Ads VNĐ Uy Tín - Ổn Định - An Toàn',
    heroDescription: 'Giải pháp tài khoản Google Ads thanh toán VNĐ chất lượng cao, không cần thẻ quốc tế, hạn mức linh hoạt, hỗ trợ chuyên nghiệp 24/7. Tài khoản ổn định lâu dài với độ tin cậy được xác minh từ Google.',
    features: {
      title: 'Tính Năng & Ưu Điểm Vượt Trội',
      items: [
        { name: 'Thanh Toán VNĐ Tiện Lợi', description: 'Không cần thẻ visa/mastercard quốc tế, thanh toán dễ dàng bằng VNĐ qua chuyển khoản ngân hàng, ví điện tử trong nước' },
        { name: 'Hạn Mức Cao & Linh Hoạt', description: 'Hạn mức chi tiêu linh hoạt từ 10 triệu đến không giới hạn/ngày, phù hợp mọi quy mô doanh nghiệp từ nhỏ đến lớn' },
        { name: 'Tài Khoản Ổn Định & Tin Cậy', description: 'Tài khoản được xác minh từ Google, độ tin cậy cao, ít bị khóa, chạy quảng cáo ổn định lâu dài không gián đoạn' },
        { name: 'Hỗ Trợ Đa Ngành Nghề', description: 'Hỗ trợ mọi lĩnh vực kinh doanh: Thương mại điện tử, giáo dục, bất động sản, tài chính, y tế, dịch vụ...' },
        { name: 'Tiết Kiệm Thời Gian', description: 'Không cần tốn thời gian tạo và xây dựng độ uy tín tài khoản, nhận và sử dụng ngay, tập trung vào chiến dịch quảng cáo' },
        { name: 'Hỗ Trợ Chuyên Nghiệp 24/7', description: 'Đội ngũ chuyên gia Google Ads giàu kinh nghiệm hỗ trợ kỹ thuật, tư vấn chiến lược quảng cáo mọi lúc mọi nơi' },
      ],
    },
    process: {
      title: 'Quy Trình Thuê Tài Khoản Đơn Giản - Nhanh Chóng',
      steps: [
        { title: 'Liên Hệ & Tư Vấn', description: 'Liên hệ qua hotline, email hoặc form. Chúng tôi tư vấn gói dịch vụ phù hợp với nhu cầu và ngân sách của bạn' },
        { title: 'Cung Cấp Thông Tin', description: 'Cung cấp thông tin doanh nghiệp: tên công ty, website, lĩnh vực kinh doanh, nhu cầu chi tiêu quảng cáo hàng ngày' },
        { title: 'Xác Minh & Ký Hợp Đồng', description: 'Xác minh thông tin, ký hợp đồng điện tử hoặc giấy đảm bảo quyền lợi 2 bên, minh bạch và rõ ràng' },
        { title: 'Nhận Tài Khoản', description: 'Nhận thông tin tài khoản Google Ads (email, mật khẩu), hướng dẫn chi tiết cách sử dụng và setup ban đầu' },
        { title: 'Nạp Tiền & Chạy Ads', description: 'Nạp tiền vào tài khoản qua chuyển khoản ngân hàng, bắt đầu chạy chiến dịch quảng cáo ngay lập tức' },
        { title: 'Hỗ Trợ & Bảo Hành', description: 'Được hỗ trợ kỹ thuật liên tục, giải đáp thắc mắc, xử lý sự cố nhanh chóng. Bảo hành tài khoản theo gói đã chọn' },
      ],
    },
    packages: {
      title: 'Bảng Giá Chi Phí Dịch Vụ Theo Ngân Sách Quảng Cáo',
      plans: [
        {
          name: 'Gói Startup',
          price: '5% chi phí ads',
          features: [
            'Chi tiêu: < 50 triệu VNĐ/tháng',
            'Phí dịch vụ: 5% tổng chi phí quảng cáo',
            'Hỗ trợ kỹ thuật cơ bản',
            'Nạp tiền qua ngân hàng',
            'Báo cáo hàng tháng',
            'Hạn mức: 10-30 triệu/ngày',
          ],
        },
        {
          name: 'Gói Business',
          price: '3% chi phí ads',
          features: [
            'Chi tiêu: 50-200 triệu VNĐ/tháng',
            'Phí dịch vụ: 3% tổng chi phí quảng cáo',
            'Hỗ trợ ưu tiên nhanh chóng',
            'Nhiều hình thức thanh toán',
            'Báo cáo chi tiết hàng tuần',
            'Hạn mức: 50-100 triệu/ngày',
            'Tư vấn chiến lược cơ bản',
          ],
          highlight: true,
        },
        {
          name: 'Gói Enterprise',
          price: '2% chi phí ads',
          features: [
            'Chi tiêu: > 200 triệu VNĐ/tháng',
            'Phí dịch vụ: 2% tổng chi phí quảng cáo',
            'Account manager chuyên trách',
            'Hỗ trợ 24/7 mọi lúc mọi nơi',
            'Báo cáo real-time chi tiết',
            'Hạn mức: Không giới hạn',
            'Tư vấn chiến lược chuyên sâu',
            'Ưu tiên xử lý tối đa',
          ],
        },
      ],
    },
    benefits: [
      'Thanh toán VNĐ tiện lợi, không cần thẻ quốc tế',
      'Tài khoản ổn định, ít bị khóa, độ tin cậy cao',
      'Hạn mức linh hoạt theo nhu cầu thực tế',
      'Hỗ trợ kỹ thuật chuyên nghiệp 24/7',
      'Tiết kiệm thời gian xây dựng tài khoản mới',
      'Chi phí dịch vụ minh bạch, cạnh tranh',
      'Hỗ trợ đa ngành nghề không giới hạn',
      'Bảo mật thông tin tuyệt đối',
    ],
  },
  {
    slug: 'thue-tai-khoan-invoice-usd',
    name: 'Dịch vụ Thuê Tài Khoản Invoice USD',
    shortName: 'Invoice USD',
    icon: '💵',
    description: 'Cung cấp tài khoản Google Ads Invoice USD thanh toán sau, dành cho doanh nghiệp có ngân sách lớn và uy tín cao.',
    heroTitle: 'Thuê Tài Khoản Google Ads Invoice USD',
    heroDescription: 'Tài khoản Invoice USD thanh toán sau, phù hợp cho doanh nghiệp lớn và agency.',
    features: {
      title: 'Ưu Điểm Invoice USD',
      items: [
        { name: 'Thanh toán sau', description: 'Chạy quảng cáo trước, thanh toán sau 30 ngày' },
        { name: 'Hạn mức cao', description: 'Hạn mức hàng trăm nghìn đến triệu USD' },
        { name: 'Uy tín cao', description: 'Dành cho doanh nghiệp lớn' },
        { name: 'Quản lý dễ dàng', description: 'Hóa đơn VAT đầy đủ' },
      ],
    },
    process: {
      title: 'Quy Trình Thuê Tài Khoản',
      steps: [
        { title: 'Tư vấn', description: 'Đánh giá nhu cầu và điều kiện' },
        { title: 'Thẩm định', description: 'Xác minh năng lực tài chính' },
        { title: 'Ký hợp đồng', description: 'Hoàn tất thủ tục pháp lý' },
        { title: 'Kích hoạt', description: 'Nhận tài khoản Invoice' },
        { title: 'Vận hành', description: 'Chạy ads và thanh toán định kỳ' },
      ],
    },
    packages: {
      title: 'Gói Dịch Vụ',
      plans: [
        {
          name: 'Gói Startup',
          price: '2.000.000 VNĐ/tháng',
          features: [
            'Hạn mức $5,000 - $10,000',
            'Thanh toán net 30',
            'Hỗ trợ kỹ thuật',
          ],
        },
        {
          name: 'Gói Business',
          price: '5.000.000 VNĐ/tháng',
          features: [
            'Hạn mức $20,000 - $50,000',
            'Thanh toán net 30',
            'Account manager',
          ],
          highlight: true,
        },
        {
          name: 'Gói Enterprise',
          price: 'Liên hệ',
          features: [
            'Hạn mức trên $100,000',
            'Điều khoản linh hoạt',
            'Hỗ trợ VIP',
          ],
        },
      ],
    },
    benefits: [
      'Thanh toán sau tiện lợi',
      'Hạn mức lớn không lo gián đoạn',
      'Hóa đơn VAT đầy đủ',
      'Uy tín và chuyên nghiệp',
    ],
  },
  {
    slug: 'design-website',
    name: 'Dịch vụ Design Website',
    shortName: 'Design Website',
    icon: '🎨',
    description: 'Thiết kế website chuyên nghiệp, hiện đại, chuẩn SEO và responsive trên mọi thiết bị.',
    heroTitle: 'Thiết Kế Website Chuyên Nghiệp',
    heroDescription: 'Tạo dựng website đẹp mắt, chuyên nghiệp giúp doanh nghiệp nâng cao hình ảnh và tăng chuyển đổi.',
    features: {
      title: 'Loại Website',
      items: [
        { name: 'Website Doanh nghiệp', description: 'Giới thiệu công ty, sản phẩm dịch vụ' },
        { name: 'Website Bán hàng', description: 'E-commerce đầy đủ tính năng' },
        { name: 'Website Tin tức', description: 'Portal và blog nội dung' },
        { name: 'Website Landing page', description: 'Trang đích tối ưu chuyển đổi' },
      ],
    },
    process: {
      title: 'Quy Trình Thiết Kế',
      steps: [
        { title: 'Lên ý tưởng', description: 'Brainstorm và phác thảo' },
        { title: 'Thiết kế UI/UX', description: 'Thiết kế giao diện và trải nghiệm' },
        { title: 'Phát triển', description: 'Lập trình và tích hợp tính năng' },
        { title: 'Testing', description: 'Kiểm thử và tối ưu' },
        { title: 'Bàn giao', description: 'Deploy và hướng dẫn sử dụng' },
      ],
    },
    packages: {
      title: 'Gói Dịch Vụ',
      plans: [
        {
          name: 'Gói Cơ bản',
          price: '5.000.000 VNĐ',
          features: [
            'Website 5-7 trang',
            'Responsive design',
            'Chuẩn SEO cơ bản',
            'Bảo hành 6 tháng',
          ],
        },
        {
          name: 'Gói Tiêu chuẩn',
          price: '15.000.000 VNĐ',
          features: [
            'Website 10-15 trang',
            'Thiết kế custom',
            'Tối ưu SEO nâng cao',
            'Bảo hành 12 tháng',
          ],
          highlight: true,
        },
        {
          name: 'Gói Cao cấp',
          price: 'Liên hệ',
          features: [
            'Website không giới hạn',
            'Tích hợp API phức tạp',
            'Tối ưu performance',
            'Bảo hành 24 tháng',
          ],
        },
      ],
    },
    benefits: [
      'Thiết kế độc đáo, chuyên nghiệp',
      'Chuẩn SEO và tốc độ tối ưu',
      'Responsive mọi thiết bị',
      'Bảo hành và hỗ trợ dài hạn',
    ],
  },
  {
    slug: 'thiet-ke-landing-page',
    name: 'Dịch vụ Thiết Kế Landing Page',
    shortName: 'Landing Page',
    icon: '📄',
    description: 'Thiết kế landing page tối ưu chuyển đổi cao, tập trung vào mục tiêu Marketing cụ thể.',
    heroTitle: 'Thiết Kế Landing Page Chuyển Đổi Cao',
    heroDescription: 'Tạo landing page thu hút, tối ưu CRO giúp tăng tỷ lệ chuyển đổi từ quảng cáo.',
    features: {
      title: 'Đặc Điểm Landing Page',
      items: [
        { name: 'Tối ưu CRO', description: 'Thiết kế tập trung vào chuyển đổi' },
        { name: 'Loading nhanh', description: 'Tối ưu tốc độ tải trang' },
        { name: 'Mobile-first', description: 'Ưu tiên trải nghiệm mobile' },
        { name: 'A/B Testing', description: 'Hỗ trợ kiểm thử và tối ưu' },
      ],
    },
    process: {
      title: 'Quy Trình Thiết Kế',
      steps: [
        { title: 'Xác định mục tiêu', description: 'Phân tích đối tượng và mục tiêu' },
        { title: 'Wireframe', description: 'Vẽ khung và dàn ý nội dung' },
        { title: 'Design', description: 'Thiết kế giao diện chi tiết' },
        { title: 'Development', description: 'Lập trình và tối ưu' },
        { title: 'Launch & Test', description: 'Triển khai và theo dõi' },
      ],
    },
    packages: {
      title: 'Gói Dịch Vụ',
      plans: [
        {
          name: 'Gói Cơ bản',
          price: '3.000.000 VNĐ',
          features: [
            '1 landing page',
            'Responsive design',
            'Form liên hệ',
            'Bảo hành 3 tháng',
          ],
        },
        {
          name: 'Gói Tiêu chuẩn',
          price: '5.000.000 VNĐ',
          features: [
            '1 landing page',
            'Design custom cao cấp',
            'Tích hợp tracking',
            'Bảo hành 6 tháng',
          ],
          highlight: true,
        },
        {
          name: 'Gói Premium',
          price: '10.000.000 VNĐ',
          features: [
            '3 landing pages',
            'A/B testing',
            'Tối ưu conversion',
            'Bảo hành 12 tháng',
          ],
        },
      ],
    },
    benefits: [
      'Tăng conversion rate',
      'Chi phí quảng cáo hiệu quả hơn',
      'Tốc độ tải trang nhanh',
      'Dễ dàng A/B testing',
    ],
  },
];
