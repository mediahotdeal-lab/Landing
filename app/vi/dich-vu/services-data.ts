export interface Service {
  slug: string;
  name: string;
  shortName: string;
  icon: string;
  description: string;
  heroTitle: string;
  heroDescription: string;
  // Optional: Hero description in parts for better display
  heroDescriptionParts?: {
    context: string;
    challenge: string;
    solution: string;
  };
  // Optional: What is this service section
  aboutService?: {
    title: string;
    description: string;
    benefits: string[];
    additionalText?: string; // Text after benefits
  };
  // Optional: Why choose us section
  whyChooseUs?: {
    title: string;
    description: string;
    points: { title: string; description: string }[];
  };
  features: {
    title: string;
    intro?: string; // Intro text before items
    items: { name: string; description: string }[];
  };
  // Optional: Account types section
  accountTypes?: {
    title: string;
    description: string;
    types: { name: string; description: string }[];
    note?: string; // Note after types
  };
  // Optional: Rental model section
  rentalModel?: {
    title: string;
    points: { title: string; description: string }[];
  };
  process: {
    title: string;
    steps: { title: string; description: string }[];
    note?: string; // Note after steps
  };
  // Optional: Quick guide section
  quickGuide?: {
    title: string;
    intro: string;
    steps: string[];
  };
  // Optional: Final CTA section
  finalCTA?: {
    title: string;
    description: string;
    bullets?: string[]; // Optional bullets list
    footer: string;
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
    heroTitle: 'Dịch Vụ Quảng Cáo Google Ads Chuyên Nghiệp – Giải Pháp Tăng Doanh Số Nhanh Cùng Hotdeal Media',
    heroDescription: 'Trong kỷ nguyên số, khi người tiêu dùng "Google" mọi thứ trước khi ra quyết định mua hàng, việc xuất hiện đúng lúc và đúng nơi trên công cụ tìm kiếm không chỉ là lợi thế mà là yếu tố sống còn cho mọi doanh nghiệp. Giữa hàng nghìn thương hiệu cạnh tranh, Google Ads chính là "vũ khí tăng trưởng" giúp doanh nghiệp vươn tầm hiển thị, thu hút khách hàng tiềm năng và tăng doanh thu vượt trội. Với hơn 10 năm kinh nghiệm trong lĩnh vực Digital Marketing, Hotdeal Media tự hào là đối tác chiến lược của Google tại Việt Nam, cung cấp dịch vụ quảng cáo Google Ads chuyên nghiệp – được thiết kế riêng cho từng ngành nghề, đảm bảo chi phí tối ưu và lợi nhuận tối đa.',
    heroDescriptionParts: {
      context: 'Trong kỷ nguyên số, khi người tiêu dùng "Google" mọi thứ trước khi ra quyết định mua hàng, việc xuất hiện đúng lúc và đúng nơi trên công cụ tìm kiếm không chỉ là lợi thế mà là yếu tố sống còn cho mọi doanh nghiệp.',
      challenge: 'Giữa hàng nghìn thương hiệu cạnh tranh, Google Ads chính là "vũ khí tăng trưởng" giúp doanh nghiệp vươn tầm hiển thị, thu hút khách hàng tiềm năng và tăng doanh thu vượt trội.',
      solution: 'Với hơn 10 năm kinh nghiệm trong lĩnh vực Digital Marketing, Hotdeal Media tự hào là đối tác chiến lược của Google tại Việt Nam, cung cấp dịch vụ quảng cáo Google Ads chuyên nghiệp – được thiết kế riêng cho từng ngành nghề, đảm bảo chi phí tối ưu và lợi nhuận tối đa.',
    },
    aboutService: {
      title: 'Google Ads Là Gì Và Vì Sao Doanh Nghiệp Cần?',
      description: 'Google Ads là nền tảng quảng cáo trực tuyến của Google, cho phép doanh nghiệp hiển thị sản phẩm hoặc dịch vụ của mình trên nhiều kênh khác nhau:',
      platforms: [
        { name: 'Search Ads', desc: 'Công cụ tìm kiếm Google', icon: '🔍' },
        { name: 'Display Ads', desc: 'Mạng hiển thị đối tác', icon: '🖼️' },
        { name: 'Video Ads', desc: 'YouTube', icon: '🎬' },
        { name: 'Shopping Ads', desc: 'Google Shopping', icon: '🛒' },
        { name: 'App Campaigns', desc: 'Ứng dụng di động', icon: '📱' },
        { name: 'Performance Max', desc: 'Tăng doanh thu & bán hàng', icon: '⚡' },
      ],
      benefits: [
        'Tiếp cận đúng khách hàng mục tiêu: hiển thị cho nhóm người đang thật sự tìm kiếm sản phẩm/dịch vụ của bạn.',
        'Tối ưu chi phí thông minh: chỉ trả tiền khi có người nhấp vào quảng cáo (CPC).',
        'Đo lường minh bạch: theo dõi chính xác mỗi lượt nhấp, chuyển đổi, tỷ lệ ROI.',
        'Tăng doanh thu nhanh chóng: phù hợp với mọi quy mô doanh nghiệp.',
        'Xây dựng thương hiệu mạnh mẽ: duy trì mức độ nhận diện bền vững trên nền tảng toàn cầu.',
      ],
      additionalText: 'Nếu SEO giúp bạn phát triển dài hạn, thì Google Ads là cách để bứt phá ngay hôm nay – và để không "đốt tiền", bạn cần một đối tác am hiểu Google: Hotdeal Media.',
    },
    whyChooseUs: {
      title: 'Vì Sao Chọn Hotdeal Media Làm Đối Tác Google Ads?',
      description: 'Hotdeal Media không chỉ là một agency quảng cáo – chúng tôi là chuyên gia tăng trưởng doanh thu thực chiến. Là Google Certified Partner tại Việt Nam, Hotdeal Media cam kết mang đến chiến dịch quảng cáo hiệu quả với 5 điểm khác biệt:',
      points: [
        {
          title: 'Chuyên gia chứng nhận Google Partner',
          description: 'Am hiểu sâu từng ngành hàng, nắm bắt hành vi khách hàng.',
        },
        {
          title: 'Chiến lược dựa trên dữ liệu (Data-driven)',
          description: 'Tối ưu theo từ khóa, thiết bị, thời gian hiển thị và hành vi tìm kiếm.',
        },
        {
          title: 'Minh bạch 100%',
          description: 'Báo cáo chi tiết, bạn biết chính xác từng đồng chi phí được sử dụng thế nào.',
        },
        {
          title: 'Tối ưu liên tục',
          description: 'Theo dõi hằng ngày, điều chỉnh để đạt hiệu suất tốt nhất.',
        },
        {
          title: 'Dịch vụ trọn gói & hỗ trợ 24/7',
          description: 'Từ setup chiến dịch, viết nội dung chuẩn SEO, tối ưu landing page đến chăm sóc after-sale – tất cả được đảm bảo nhất quán.',
        },
      ],
    },
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
      title: 'Quy Trình Triển Khai Quảng Cáo Google Ads Tại Hotdeal Media',
      steps: [
        { title: 'Tư vấn & xác định mục tiêu', description: 'Lắng nghe, phân tích hành trình khách hàng, xác định KPI rõ ràng (chuyển đổi, doanh số, lead, thương hiệu).' },
        { title: 'Nghiên cứu thị trường & đối thủ', description: 'Sử dụng công cụ phân tích từ khóa, xác định xu hướng tìm kiếm và cơ hội cạnh tranh.' },
        { title: 'Lên chiến lược & thiết lập chiến dịch', description: 'Chọn loại hình quảng cáo phù hợp (Search, Video, Shopping…), viết nội dung hấp dẫn và SEO-friendly.' },
        { title: 'Theo dõi – tối ưu – thử nghiệm', description: 'Liên tục điều chỉnh giá thầu, nhóm quảng cáo, vị trí hiển thị để tăng tỷ lệ chuyển đổi.' },
        { title: 'Báo cáo & đề xuất chiến lược mở rộng', description: 'Cung cấp báo cáo định kỳ, cùng kế hoạch mở rộng để tối đa lợi nhuận lâu dài.' },
      ],
      note: 'Mỗi dự án đều có chuyên viên phụ trách riêng, đảm bảo tiến độ nhanh, minh bạch và hiệu quả cao nhất cho doanh nghiệp.',
    },
    packages: {
      title: 'Bảng Giá Dịch Vụ Quảng Cáo Google Ads',
      plans: [
        {
          name: 'GÓI SETUP',
          price: '3,500,000đ/lần',
          features: [
            'Full Setup chuẩn Google Ads',
            '3 chiến dịch Google Search hoặc Google Display',
            '1 chiến dịch tiếp thị lại - Remarketing',
            'Cài đặt chuyển đổi, tiếp thị lại',
            'Bàn giao tài khoản',
            'Hướng dẫn sử dụng',
          ],
        },
        {
          name: 'GÓI CARE',
          price: '5,500,000đ/tháng',
          features: [
            'Full Setup Google Ads nâng cao',
            '5+ chiến dịch Search, Remarketing',
            '10+ chiến dịch Display, Demand Gen, Video, Pmax',
            'Phù hợp ngân sách vừa và nhỏ',
            'Cài đặt và theo dõi chuyển đổi',
            'Tối ưu quảng cáo hàng ngày',
            'Áp dụng cho ngân sách dưới 50tr/tháng',
          ],
          highlight: true,
        },
        {
          name: 'GÓI SCALE',
          price: 'Liên hệ Tư Vấn',
          features: [
            'Full Setup tăng trưởng',
            'Không giới hạn chiến dịch: Display, Demand Gen, Video, Pmax...',
            'Cài đặt và tối ưu chuyển đổi',
            'Phù hợp ngân sách lớn',
            'Cố vấn chiến lược Google ADS 1:1',
            'Tập chung đẩy mạnh doanh số',
            'Tư vấn chính sửa, tối ưu, test quảng cáo',
            'Chạy theo KPIs: CPA, Conversion...',
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
    finalCTA: {
      title: 'Đừng Để Đối Thủ Xuất Hiện Trước Bạn Trên Google!',
      description: 'Trong khi bạn đang đọc bài viết này, đối thủ của bạn có thể đang chạy quảng cáo và thu hút chính khách hàng của bạn. Cơ hội không chờ đợi — hãy hành động ngay hôm nay để dẫn đầu thị trường. Liên hệ Hotdeal Media để được:',
      bullets: [
        'Tư vấn 1:1 miễn phí cùng chuyên gia quảng cáo Google.',
        'Audit miễn phí tài khoản Google Ads hiện có.',
        'Nhận chiến lược cá nhân hóa phù hợp với mục tiêu doanh nghiệp.',
      ],
      footer: 'Hotdeal Media – đối tác Google Ads đáng tin cậy, đồng hành cùng thành công bền vững của bạn. Khi quảng cáo được tối ưu đúng cách, mỗi click đều có giá trị – và mỗi đồng chi tiêu là một khoản đầu tư sinh lời.',
    },
  },
  {
    slug: 'thue-tai-khoan-google-ads-vnd',
    name: 'Dịch vụ Thuê Tài Khoản Google Ads',
    shortName: 'Tài khoản Google Ads VNĐ',
    icon: '💳',
    description: 'Cung cấp tài khoản Google Ads thanh toán bằng VNĐ với độ tin cậy cao, giúp doanh nghiệp Việt Nam dễ dàng thanh toán và quản lý ngân sách quảng cáo hiệu quả.',
    heroTitle: 'Dịch vụ cho thuê tài khoản Google Ads uy tín tại Hotdeal Media',
    heroDescription: 'Trong kỷ nguyên số, quảng cáo trực tuyến đã trở thành yếu tố then chốt giúp doanh nghiệp phát triển, mở rộng thị phần và tiếp cận khách hàng chính xác hơn bao giờ hết. Tuy nhiên, việc khởi chạy chiến dịch quảng cáo hiệu quả đòi hỏi tài khoản Google Ads ổn định, ngân sách linh hoạt và quản lý chuyên nghiệp. Hotdeal Media tự hào mang đến dịch vụ cho thuê tài khoản Google Ads uy tín, an toàn và tối ưu chi phí – giải pháp toàn diện giúp doanh nghiệp bắt đầu quảng cáo ngay mà không lo về vấn đề kỹ thuật hay hạn mức tài khoản.',
    heroDescriptionParts: {
      context: 'Trong kỷ nguyên số, quảng cáo trực tuyến đã trở thành yếu tố then chốt giúp doanh nghiệp phát triển, mở rộng thị phần và tiếp cận khách hàng chính xác hơn bao giờ hết.',
      challenge: 'Tuy nhiên, việc khởi chạy chiến dịch quảng cáo hiệu quả đòi hỏi tài khoản Google Ads ổn định, ngân sách linh hoạt và quản lý chuyên nghiệp.',
      solution: 'Hotdeal Media tự hào mang đến dịch vụ cho thuê tài khoản Google Ads uy tín, an toàn và tối ưu chi phí – giải pháp toàn diện giúp doanh nghiệp bắt đầu quảng cáo ngay mà không lo về vấn đề kỹ thuật hay hạn mức tài khoản.',
    },
    aboutService: {
      title: 'Google Ads là gì và tại sao doanh nghiệp cần?',
      description: 'Google Ads là nền tảng quảng cáo trực tuyến hàng đầu thế giới, cho phép doanh nghiệp hiển thị sản phẩm và dịch vụ đến người dùng tiềm năng thông qua mạng tìm kiếm Google, YouTube, Gmail và hệ thống đối tác. Đây là công cụ tối ưu để doanh nghiệp:',
      benefits: [
        'Tăng lượt hiển thị thương hiệu.',
        'Tăng lượng truy cập website chất lượng.',
        'Tăng chuyển đổi (Conversion) cho website.',
        'Nâng cao doanh số bán hàng.',
      ],
      additionalText: 'Tuy nhiên, để vận hành hiệu quả, doanh nghiệp cần một tài khoản Google Ads "sạch", có lịch sử hoạt động tốt, được xác minh đầy đủ và đáp ứng tiêu chuẩn của Google. Nhiều doanh nghiệp gặp khó khăn vì tài khoản bị khóa, bị giới hạn chi tiêu hoặc không thể chạy ngân sách lớn. Đó chính là lý do dịch vụ cho thuê tài khoản Google Ads tại Hotdeal Media ra đời.',
    },
    accountTypes: {
      title: 'Các loại tài khoản cho thuê tại Hotdeal Media',
      description: 'Hotdeal Media hiện cung cấp nhiều gói tài khoản Google Ads khác nhau để đáp ứng nhu cầu đa dạng của khách hàng.',
      types: [
        {
          name: 'Tài khoản invoice',
          description: 'Dành cho các Cá nhân, Doanh nghiệp vừa & nhỏ Và cả Agency hoặc doanh nghiệp lớn muốn quản lý nhiều tài khoản cùng lúc, triển khai chiến dịch đa kênh, chạy ngân sách quảng cáo lớn.',
        },
      ],
      note: 'Mọi tài khoản của Hotdeal Media đều được cấp quyền sử dụng hợp lệ, có lịch sử hoạt động minh bạch, đảm bảo đáp ứng tiêu chuẩn của Google.',
    },
    rentalModel: {
      title: 'Mô hình thuê tài khoản – Đơn giản, minh bạch và hiệu quả',
      points: [
        {
          title: 'Toàn quyền sử dụng',
          description: 'Bạn được toàn quyền sử dụng tài khoản, tự setup chiến dịch theo nhu cầu.',
        },
        {
          title: 'Thời hạn thuê linh hoạt',
          description: 'Có thể theo tuần, tháng hoặc quý, tùy mục tiêu quảng cáo.',
        },
        {
          title: 'Bảo hành trọn gói',
          description: 'Nếu tài khoản gặp lỗi hoặc bị khóa, Hotdeal Media hỗ trợ đổi mới nhanh chóng trong 24 giờ.',
        },
      ],
    },
    features: {
      title: 'Lợi ích nổi bật khi thuê tài khoản Google Ads',
      intro: 'Khi lựa chọn Hotdeal Media, bạn không chỉ thuê một tài khoản quảng cáo, mà còn nhận được giải pháp trọn gói giúp chiến dịch đạt hiệu quả tối đa:',
      items: [
        { name: 'Tài khoản uy tín, đã được xác minh', description: 'Hoạt động ổn định, không bị giới hạn ngân sách hay khóa tài khoản.' },
        { name: 'Chạy ngân sách lớn thoải mái', description: 'Phù hợp cho cả doanh nghiệp vừa và nhỏ (SMB) lẫn Agency cần chiến dịch quy mô lớn.' },
        { name: 'Hỗ trợ kỹ thuật 24/7', description: 'Đội ngũ chuyên gia luôn sẵn sàng hỗ trợ xử lý sự cố và tối ưu quảng cáo.' },
        { name: 'Tư vấn cá nhân hóa', description: 'Hướng dẫn thiết lập, vận hành và đo lường hiệu quả chiến dịch.' },
        { name: 'Chi phí linh hoạt, rõ ràng', description: 'Cam kết minh bạch, phù hợp với mọi mô hình kinh doanh.' },
      ],
    },
    process: {
      title: 'Quy trình thuê tài khoản Google Ads tại Hotdeal Media',
      steps: [
        { title: 'Liên hệ tư vấn', description: 'Gửi yêu cầu qua hotline, email hoặc form đăng ký.' },
        { title: 'Chọn loại tài khoản', description: 'Xác định nhu cầu và ngân sách phù hợp.' },
        { title: 'Ký hợp đồng và thanh toán phí thuê', description: '' },
        { title: 'Nhận quyền truy cập tài khoản', description: 'Được hướng dẫn chi tiết cách sử dụng.' },
        { title: 'Hỗ trợ vận hành & tối ưu chiến dịch', description: 'Đội ngũ kỹ thuật đồng hành xuyên suốt.' },
      ],
      note: 'Tất cả diễn ra nhanh gọn – bảo mật – chuyên nghiệp.',
    },
    packages: {
      title: 'Bảng Giá Dịch Vụ Thuê Tài Khoản Google Ads Tại HOTDEAL MEDIA',
      plans: [
        {
          name: 'Mốc Phí 5%',
          price: '5%',
          features: [
            'Ngân sách: Dưới 200 triệu',
          ],
        },
        {
          name: 'Mốc Phí 4%',
          price: '4%',
          features: [
            'Ngân sách: Từ 200 triệu - 1 tỷ',
          ],
          highlight: true,
        },
        {
          name: 'Mốc Phí 3%',
          price: '3%',
          features: [
            'Ngân sách: Trên 1 tỷ',
          ],
        },
      ],
    },
    benefits: [
      'Kinh nghiệm dày dạn: Hotdeal Media đã đồng hành cùng hàng trăm doanh nghiệp đạt kết quả quảng cáo vượt mong đợi.',
      'An toàn và minh bạch: Không sử dụng voucher giả, thẻ Visa lậu hay bất kỳ hình thức gian lận nào.',
      'Hỗ trợ marketing toàn diện: Ngoài cho thuê tài khoản, chúng tôi còn cung cấp dịch vụ chạy quảng cáo Google chuyên nghiệp, tối ưu chuyển đổi và báo cáo chi tiết. Ngoài ra chúng tôi còn hỗ trợ tư vấn chiến lược marketing tổng thể để chiến dịch của bạn đạt hiệu quả nhất.',
      'Chi phí hợp lý, hiệu quả lâu dài: Bạn chỉ trả phí thuê – không phí ẩn, không rủi ro.',
      'Cam kết hiệu quả: Mỗi khách hàng đều có chuyên viên tư vấn riêng, đồng hành từ lúc setup đến khi đạt kết quả.',
    ],
    quickGuide: {
      title: 'Hướng dẫn nhanh để bắt đầu',
      intro: 'Để sở hữu tài khoản Google Ads chất lượng, bạn chỉ cần vài phút:',
      steps: [
        'Liên hệ Hotdeal Media qua hotline, email hoặc form đăng ký trực tuyến.',
        'Chuẩn bị các thông tin cần thiết (ví dụ: giấy phép kinh doanh nếu có).',
        'Lựa chọn gói thuê phù hợp với quy mô chiến dịch.',
        'Ký hợp đồng – nhận tài khoản – bắt đầu quảng cáo ngay!',
      ],
    },
    finalCTA: {
      title: 'Liên hệ ngay để nhận ưu đãi đặc biệt',
      description: 'Đừng để vấn đề tài khoản quảng cáo làm gián đoạn chiến dịch marketing của bạn. Với dịch vụ cho thuê tài khoản Google Ads tại Hotdeal Media, bạn có thể quảng cáo hiệu quả, tiết kiệm chi phí và đạt kết quả nhanh chóng. Hotdeal Media – Đối tác đáng tin cậy cho mọi chiến dịch Google Ads.',
      footer: 'Hotdeal Media – Uy tín là lợi thế, hiệu quả là cam kết!',
    },
  },
  {
    slug: 'thiet-ke-website',
    name: 'Dịch vụ Thiết Kế Website',
    shortName: 'Thiết kế Website',
    icon: '🎨',
    description: 'Thiết kế website chuyên nghiệp, tối ưu toàn diện từ giao diện, trải nghiệm người dùng cho đến chuẩn SEO — giúp doanh nghiệp thực sự bứt phá trên thị trường số.',
    heroTitle: 'Dịch vụ Thiết kế Website Chuyên nghiệp tại Hotdeal Media',
    heroDescription: 'Trong thời đại chuyển đổi số, website không chỉ là công cụ giới thiệu sản phẩm, dịch vụ đơn thuần mà đã trở thành nền tảng kinh doanh cốt lõi giúp doanh nghiệp xây dựng thương hiệu, tiếp cận khách hàng và tạo doanh thu bền vững. Hiểu được điều đó, Hotdeal Media mang đến dịch vụ thiết kế website chuyên nghiệp, tối ưu toàn diện từ giao diện, trải nghiệm người dùng cho đến chuẩn SEO — giúp doanh nghiệp của bạn thực sự bứt phá trên thị trường số.',
    heroDescriptionParts: {
      context: 'Trong thời đại chuyển đổi số, website không chỉ là công cụ giới thiệu sản phẩm, dịch vụ đơn thuần mà đã trở thành nền tảng kinh doanh cốt lõi giúp doanh nghiệp xây dựng thương hiệu, tiếp cận khách hàng và tạo doanh thu bền vững.',
      challenge: 'Một website được thiết kế chỉn chu giống như bộ mặt thương hiệu trong môi trường trực tuyến. Khi khách hàng truy cập, họ không chỉ tìm thông tin mà còn đánh giá mức độ uy tín và chuyên nghiệp của bạn thông qua trải nghiệm đó.',
      solution: 'Hotdeal Media mang đến dịch vụ thiết kế website chuyên nghiệp, tối ưu toàn diện từ giao diện, trải nghiệm người dùng cho đến chuẩn SEO — giúp doanh nghiệp của bạn thực sự bứt phá trên thị trường số.',
    },
    aboutService: {
      title: 'Vì sao doanh nghiệp cần một website chuyên nghiệp?',
      description: 'Một website được thiết kế chỉn chu giống như bộ mặt thương hiệu trong môi trường trực tuyến. Khi khách hàng truy cập, họ không chỉ tìm thông tin mà còn đánh giá mức độ uy tín và chuyên nghiệp của bạn thông qua trải nghiệm đó.',
      benefits: [
        'Tỷ lệ chuyển đổi cao hơn: Giao diện đẹp, thân thiện giúp giữ chân người dùng lâu hơn và gia tăng đơn hàng.',
        'Thể hiện uy tín thương hiệu: Website chuyên nghiệp giúp tạo niềm tin, khẳng định vị thế doanh nghiệp.',
        'Tối ưu chi phí marketing: Một website chuẩn SEO giúp giảm chi phí quảng cáo, tăng thứ hạng tự nhiên trên Google.',
      ],
    },
    whyChooseUs: {
      title: 'Lợi ích vượt trội khi sử dụng dịch vụ thiết kế website tại Hotdeal Media',
      description: 'Chúng tôi không chỉ thiết kế website đẹp mà còn tập trung vào hiệu quả kinh doanh thực tế cho doanh nghiệp.',
      points: [
        {
          title: '1. Tiếp cận khách hàng mục tiêu chính xác',
          description: 'Website được xây dựng theo chiến lược rõ ràng giúp doanh nghiệp xác định đúng đối tượng khách hàng, mở rộng thị trường và nâng cao hiệu quả truyền thông.',
        },
        {
          title: '2. Tăng sức cạnh tranh trên thị trường số',
          description: 'Trong bối cảnh hàng ngàn thương hiệu xuất hiện mỗi ngày, một website đẹp – chuẩn – nhanh – bảo mật chính là lợi thế vượt trội giúp bạn nổi bật và khẳng định vị thế.',
        },
        {
          title: '3. Tối ưu trải nghiệm người dùng (UX/UI)',
          description: 'Hotdeal Media chú trọng thiết kế giao diện trực quan, dễ sử dụng, tốc độ tải nhanh, tương thích hoàn hảo với mọi thiết bị. Trải nghiệm tốt giúp tăng tỉ lệ chuyển đổi tự nhiên.',
        },
        {
          title: '4. Hỗ trợ hiệu quả chiến lược marketing – bán hàng',
          description: 'Chúng tôi không chỉ thiết kế website, mà còn tích hợp các giải pháp marketing thông minh, hỗ trợ chạy quảng cáo, tối ưu SEO và đo lường hiệu quả kinh doanh.',
        },
      ],
    },
    features: {
      title: 'Điểm mạnh khác biệt của Hotdeal Media',
      items: [
        { name: 'Đội ngũ thiết kế chuyên nghiệp, sáng tạo và giàu kinh nghiệm', description: 'Hotdeal Media quy tụ đội ngũ chuyên viên thiết kế UI/UX, lập trình viên và chuyên gia SEO nhiều năm kinh nghiệm. Chúng tôi luôn cập nhật các xu hướng thiết kế hiện đại để mang lại website đẳng cấp – chuẩn xu hướng – tối ưu hiệu năng.' },
        { name: 'Giao diện độc quyền, mang dấu ấn thương hiệu', description: 'Mỗi website được tạo ra đều phản ánh phong cách riêng của từng doanh nghiệp. Không có sự sao chép, chỉ có bản sắc thương hiệu được thể hiện rõ nét.' },
        { name: 'Tối ưu chuẩn SEO toàn diện từ đầu đến cuối', description: 'Từ cấu trúc chuyên nghiệp, tối ưu tốc độ, code chuẩn, bố cục nội dung hợp lý đến thẻ meta, hình ảnh, liên kết nội bộ — tất cả đều được chuẩn hóa để giúp website dễ dàng lên top Google, mang lại lượng truy cập tự nhiên bền vững.' },
        { name: 'Bảo mật và tốc độ vượt trội', description: 'Hotdeal Media cam kết website bạn luôn hoạt động tối ưu, tốc độ tải nhanh, mã nguồn sạch và bảo mật tuyệt đối – đảm bảo an toàn thông tin và dữ liệu khách hàng.' },
        { name: 'Hỗ trợ bảo trì – nâng cấp dài hạn', description: 'Chúng tôi không chỉ bàn giao sản phẩm mà còn đồng hành lâu dài, hỗ trợ kỹ thuật nhanh chóng và cập nhật các tính năng mới khi doanh nghiệp phát triển.' },
      ],
    },
    process: {
      title: 'Quy trình thiết kế website chuẩn chuyên nghiệp',
      steps: [
        { title: 'Bước 1: Tư vấn & Khảo sát nhu cầu', description: 'Chúng tôi lắng nghe và phân tích kỹ mục tiêu, đối tượng và lĩnh vực kinh doanh của bạn để định hướng chiến lược thiết kế hiệu quả.' },
        { title: 'Bước 2: Nghiên cứu thị trường & đối thủ', description: 'Đội ngũ chuyên gia của Hotdeal Media tiến hành phân tích sâu thị trường và xu hướng để tạo lợi thế cạnh tranh mạnh mẽ cho website.' },
        { title: 'Bước 3: Lên kế hoạch & kiến trúc website', description: 'Tất cả cấu trúc trang, luồng tương tác và tính năng đều được định hình cẩn thận nhằm đạt mục tiêu kinh doanh của doanh nghiệp.' },
        { title: 'Bước 4: Thiết kế giao diện (UI/UX)', description: 'Xây dựng giao diện độc quyền, thân thiện, chuẩn responsive cho mọi thiết bị: máy tính, di động, máy tính bảng.' },
        { title: 'Bước 5: Lập trình & kiểm thử', description: 'Phát triển website bằng công nghệ hiện đại, tích hợp tính năng cần thiết, kiểm tra chất lượng trước khi bàn giao.' },
        { title: 'Bước 6: Bàn giao & hướng dẫn sử dụng', description: 'Chúng tôi cung cấp tài liệu hướng dẫn chi tiết và đào tạo quản trị web để bạn chủ động vận hành.' },
        { title: 'Bước 7: Hỗ trợ – bảo trì định kỳ', description: 'Hotdeal Media luôn sẵn sàng hỗ trợ kỹ thuật, cập nhật xu hướng thiết kế mới để website của bạn luôn hoạt động hiệu quả.' },
      ],
    },
    packages: {
      title: 'Bảng Giá Dịch Vụ Thiết Kế Website Tại Hotdeal Media',
      plans: [
        {
          name: 'Basic',
          price: '5.000.000đ - 7.000.000đ',
          features: [
            'Thiết kế website thông tin cơ bản',
            'Miễn phí miền .com năm đầu',
            'Miễn phí hosting năm đầu',
            'Băng thông không giới hạn',
            'Website chuẩn SEO',
            'Hỗ trợ cài đặt SSL free',
            'Tối ưu tốc độ load trang',
            'Giao diện chuẩn UX/UI',
            'Tối ưu giao diện máy tính',
            'Tối ưu giao diện điện thoại',
            'Bảo hành miễn phí 1 năm',
            'Hỗ trợ setup 1 chiến dịch Google Ads',
            'Data giới hạn 3GB',
            'Hỗ trợ backup website 1 lần/ tháng',
          ],
        },
        {
          name: 'Medium',
          price: '8.000.000đ - 10.000.000đ',
          features: [
            'Thiết kế website giỏ hàng, nâng cao',
            'Miễn phí miền .com năm đầu',
            'Miễn phí hosting năm đầu',
            'Băng thông không giới hạn',
            'Website chuẩn SEO',
            'Hỗ trợ cài đặt SSL free',
            'Tối ưu tốc độ load trang',
            'Giao diện chuẩn UX/UI',
            'Tối ưu giao diện máy tính',
            'Tối ưu giao diện điện thoại',
            'Bảo hành miễn phí 1 năm',
            'Hỗ trợ setup 2 chiến dịch Google Ads',
            'Data giới hạn 5GB',
            'Hỗ trợ đăng 5 bài viết/ sản phẩm',
            'Hỗ trợ backup website 1 lần/ tháng',
          ],
          highlight: true,
        },
        {
          name: 'Premium',
          price: 'Tư vấn chi tiết',
          features: [
            'Thiết kế website theo yêu cầu',
            'Miễn phí miền .com năm đầu',
            'Miễn phí hosting năm đầu',
            'Băng thông không giới hạn',
            'Website chuẩn SEO',
            'Hỗ trợ cài đặt SSL free',
            'Tối ưu tốc độ load trang',
            'Giao diện chuẩn UX/UI',
            'Tối ưu giao diện máy tính',
            'Tối ưu giao diện điện thoại',
            'Bảo hành miễn phí 1 năm',
            'Hỗ trợ setup 3 chiến dịch Google Ads',
            'Data giới hạn 7GB',
            'Hỗ trợ đăng 10 bài viết/ sản phẩm',
            'Hỗ trợ backup website 1 lần/ tháng',
          ],
        },
      ],
    },
    benefits: [
      'Tư vấn song hành giữa thiết kế website và chiến lược marketing số.',
      'Ứng dụng công nghệ thiết kế hiện đại, dễ mở rộng và nâng cấp.',
      'Thiết kế theo xu hướng mới nhất, tạo trải nghiệm khác biệt.',
      'Cam kết bảo mật và an toàn tuyệt đối dữ liệu khách hàng.',
      'Hỗ trợ nâng cấp và tối ưu hiệu suất lâu dài.',
    ],
  },
  {
    slug: 'thiet-ke-landing-page',
    name: 'Dịch vụ Thiết Kế Landing Page Chuyên Nghiệp',
    shortName: 'Landing Page',
    icon: '📄',
    description: 'Thiết kế Landing Page chuyên nghiệp – sáng tạo, đậm bản sắc thương hiệu và chuẩn SEO, giúp doanh nghiệp tăng tỉ lệ chuyển đổi và tối ưu chi phí quảng cáo.',
    heroTitle: 'Dịch vụ Thiết kế Landing Page Chuyên Nghiệp',
    heroDescription: 'Trong thời đại số 4.0, Landing Page không chỉ là công cụ tiếp thị mà còn là "vũ khí bí mật" giúp doanh nghiệp tăng tỉ lệ chuyển đổi, thu hút khách hàng tiềm năng, và tối ưu chi phí quảng cáo. Tại Hotdeal Media, chúng tôi cung cấp dịch vụ thiết kế Landing Page chuyên nghiệp – sáng tạo, đậm bản sắc thương hiệu và chuẩn SEO, giúp doanh nghiệp của bạn vươn xa hơn trong thị trường trực tuyến đầy cạnh tranh.',
    heroDescriptionParts: {
      context: 'Trong thời đại số 4.0, Landing Page không chỉ là công cụ tiếp thị mà còn là "vũ khí bí mật" giúp doanh nghiệp tăng tỉ lệ chuyển đổi, thu hút khách hàng tiềm năng, và tối ưu chi phí quảng cáo.',
      challenge: 'Landing Page chuyên nghiệp là chìa khóa để biến lượt truy cập thành khách hàng tiềm năng và tối ưu hóa chi phí quảng cáo cho doanh nghiệp trong thị trường cạnh tranh.',
      solution: 'Tại Hotdeal Media, chúng tôi cung cấp dịch vụ thiết kế Landing Page chuyên nghiệp – sáng tạo, đậm bản sắc thương hiệu và chuẩn SEO, giúp doanh nghiệp của bạn vươn xa hơn trong thị trường trực tuyến đầy cạnh tranh.',
    },
    aboutService: {
      title: 'Landing Page là gì?',
      description: 'Landing Page (trang đích) là trang web độc lập, được xây dựng với một mục tiêu duy nhất: thuyết phục người truy cập thực hiện hành động cụ thể như điền form, đăng ký mua hàng, hoặc tải tài liệu.',
      benefits: [
        'Khác với website doanh nghiệp truyền thống có quá nhiều thông tin, Landing Page chỉ tập trung vào một thông điệp mạnh mẽ và một lời kêu gọi hành động rõ ràng – giúp tối ưu hiệu quả chuyển đổi khách hàng.',
      ],
    },
    whyChooseUs: {
      title: 'Vì Sao Nên Chọn Dịch Vụ Thiết Kế Landing Page của Hotdeal Media?',
      description: 'Ngoài việc tạo nên các Landing Page đẹp mắt, Hotdeal Media tập trung mang đến giải pháp chuyển đổi toàn diện. Chúng tôi không chỉ "thiết kế", mà còn đồng hành chiến lược cùng doanh nghiệp để đạt kết quả tối ưu nhất.',
      points: [
        {
          title: 'Đội ngũ thiết kế và marketing giàu kinh nghiệm',
          description: 'Với nhiều năm hoạt động trong lĩnh vực Digital Marketing, đội ngũ chuyên gia của Hotdeal Media hiểu rõ hành vi người tiêu dùng và xu hướng thiết kế hiện đại. Chúng tôi tạo ra các Landing Page thẩm mỹ – chuẩn UX/UI – đúng insight khách hàng.',
        },
        {
          title: 'Thiết kế theo yêu cầu và mục tiêu riêng',
          description: 'Mỗi Landing Page được thiết kế độc quyền cho doanh nghiệp, thể hiện đúng thông điệp thương hiệu, sản phẩm và đối tượng khách hàng mục tiêu. Không rập khuôn, không bản mẫu đại trà – mọi chi tiết được cá nhân hóa để đem lại tỷ lệ chuyển đổi cao nhất.',
        },
        {
          title: 'Chuẩn SEO – Tối ưu hiệu suất tìm kiếm',
          description: 'Hotdeal Media tuân thủ nghiêm ngặt các tiêu chuẩn SEO kỹ thuật và Onpage. Landing Page của bạn sẽ tải nhanh, thân thiện với Google, và dễ dàng lên top từ khóa, giúp tăng lưu lượng truy cập tự nhiên lâu dài.',
        },
        {
          title: 'Quy trình làm việc minh bạch và chuyên nghiệp',
          description: 'Chúng tôi áp dụng quy trình 5 bước chuẩn hóa giúp khách hàng nắm rõ từng giai đoạn, đảm bảo sản phẩm cuối cùng vượt mong đợi.',
        },
      ],
    },
    features: {
      title: 'Lợi Ích Khi Sở Hữu Landing Page Chuyên Nghiệp',
      intro: 'Một Landing Page được thiết kế bài bản không đơn thuần là đẹp mắt, mà còn là công cụ bán hàng tự động hoạt động 24/7. Dưới đây là các lợi ích nổi bật doanh nghiệp nhận được khi hợp tác với Hotdeal Media:',
      items: [
        { name: 'Tăng tỷ lệ chuyển đổi vượt trội', description: 'Tối ưu bố cục, CTA và thông điệp, giúp khách truy cập biến thành khách hàng tiềm năng nhanh chóng.' },
        { name: 'Tiết kiệm chi phí quảng cáo', description: 'Nhờ thiết kế tối ưu trải nghiệm người dùng và hành trình chuyển đổi, bạn giảm đáng kể chi phí cho mỗi chuyển đổi.' },
        { name: 'Thu thập dữ liệu khách hàng hiệu quả', description: 'Tích hợp form, khảo sát, CRM giúp dễ dàng phân tích hành vi và tái tiếp cận đúng tệp khách hàng tiềm năng.' },
        { name: 'Gia tăng uy tín và niềm tin thương hiệu', description: 'Giao diện chuyên nghiệp, rõ ràng và hiện đại giúp khách hàng tin tưởng hơn ngay từ cái nhìn đầu tiên.' },
        { name: 'Hiển thị hoàn hảo trên mọi thiết bị', description: 'Thiết kế responsive chuẩn SEO, đảm bảo trải nghiệm mượt mà trên cả máy tính, tablet, và điện thoại.' },
      ],
    },
    process: {
      title: 'Quy Trình Thiết Kế Landing Page Tại Hotdeal Media',
      steps: [
        { title: 'Tiếp nhận và phân tích yêu cầu', description: 'Xác định mục tiêu chiến dịch, đối tượng khách hàng, và đặc tính sản phẩm/dịch vụ để định hướng thiết kế phù hợp.' },
        { title: 'Lên ý tưởng và phác thảo giao diện', description: 'Thiết kế bố cục, lựa chọn tông màu và CTA, đảm bảo tính thẩm mỹ và thao tác dễ dàng.' },
        { title: 'Lập trình và tối ưu kỹ thuật', description: 'Sử dụng mã nguồn chuẩn SEO, tốc độ tải nhanh, hiển thị tương thích mọi thiết bị.' },
        { title: 'Kiểm thử và hiệu chỉnh', description: 'Đo lường hiệu suất, chỉnh sửa bố cục hoặc CTA để tối đa hóa tỷ lệ chuyển đổi.' },
        { title: 'Bàn giao và hỗ trợ hậu mãi', description: 'Cung cấp hướng dẫn sử dụng chi tiết, hỗ trợ kỹ thuật và bảo trì định kỳ theo yêu cầu khách hàng.' },
      ],
    },
    packages: {
      title: 'Bảng Giá Dịch Vụ Thiết Kế Landing Page',
      plans: [
        {
          name: 'Basic',
          price: '1.500.000đ',
          features: [
            'Thiết kế Landing page cơ bản theo mẫu có sẵn',
            'Tặng hosting năm đầu',
            'Băng thông không giới hạn',
            'Giao diện chuẩn UX/UI',
            'Thiết kế responsive trên các thiết bị',
            'Bảo hành miễn phí 1 năm',
          ],
        },
        {
          name: 'Medium',
          price: '2.500.000đ',
          features: [
            'Thiết kế Landing page nâng cao theo mẫu có sẵn',
            'Tặng hosting năm đầu',
            'Băng thông không giới hạn',
            'Giao diện chuẩn UX/UI',
            'Thiết kế responsive trên các thiết bị',
            'Bảo hành miễn phí 1 năm',
            'Hỗ trợ setup 1 chiến dịch Google Ads',
          ],
          highlight: true,
        },
        {
          name: 'Premium',
          price: 'Từ 3.500.000đ',
          features: [
            'Thiết kế Landing page theo yêu cầu',
            'Tặng hosting năm đầu',
            'Băng thông không giới hạn',
            'Giao diện chuẩn UX/UI',
            'Thiết kế responsive trên các thiết bị',
            'Bảo hành miễn phí 1 năm',
            'Hỗ trợ setup 1 chiến dịch Google Ads',
          ],
        },
      ],
    },
    benefits: [
      'Thiết kế thẩm mỹ và chuẩn SEO: Tối ưu nội dung, tốc độ và trải nghiệm, giúp Landing Page nhanh chóng lên top Google.',
      'Giá thành cạnh tranh, minh bạch: Nhiều gói dịch vụ phù hợp với nhu cầu và ngân sách khác nhau – không chi phí ẩn.',
      'Hỗ trợ tận tâm, hợp tác dài lâu: Chúng tôi không chỉ thiết kế – mà còn đồng hành cùng doanh nghiệp trong từng chiến dịch marketing, đảm bảo Landing Page luôn hoạt động hiệu quả và được cập nhật theo xu hướng mới nhất.',
    ],
    finalCTA: {
      title: 'Hãy Để Hotdeal Media Giúp Bạn Bứt Phá!',
      description: 'Đừng để chiến dịch quảng cáo của bạn lãng phí vì Landing Page kém hiệu quả. Hãy để Hotdeal Media giúp bạn xây dựng trang đích chuyển đổi mạnh mẽ, ấn tượng và sinh lời thực sự.',
      bullets: [
        'Liên hệ ngay hôm nay để được tư vấn miễn phí và nhận bản thiết kế thử theo mục tiêu doanh nghiệp của bạn!',
      ],
      footer: 'Hotdeal Media – Chuyên nghiệp, sáng tạo, và tận tâm đồng hành cùng thành công của bạn.',
    },
  },
];
