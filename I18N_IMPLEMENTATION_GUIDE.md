# Hướng Dẫn Triển Khai Đa Ngôn Ngữ (i18n) cho Service Detail Pages

## Tổng Quan

Project đã được thiết lập sẵn với `next-intl` (phiên bản 4.4.0) và có sẵn:
- ✅ LocaleProvider đã được cấu hình
- ✅ LanguageSwitcher component
- ✅ Navbar đã tích hợp LanguageSwitcher
- ✅ Translation files (messages/vi.json và messages/en.json)
- ✅ Hỗ trợ 2 ngôn ngữ: Tiếng Việt (vi) và English (en)

## Cấu Trúc Translations

### Đường dẫn translations cho Service Detail Pages
```
messages/
├── vi.json
│   └── serviceDetailPage/
│       ├── heroSteps/          # Các bước trong hero section
│       ├── sections/           # Labels cho các sections
│       ├── cta/                # Call-to-action texts
│       ├── common/             # Common texts
│       └── googleAds/          # Data cho service Google Ads
│           ├── hero/
│           ├── heroDescription/
│           ├── aboutService/
│           ├── whyChooseUs/
│           ├── features/
│           ├── process/
│           ├── packages/
│           ├── benefits/
│           └── finalCTA/
└── en.json                     # Cùng cấu trúc
```

## Cách Sử Dụng i18n trong Components

### 1. Import hook từ next-intl
```typescript
'use client';

import { useTranslations } from 'next-intl';
```

### 2. Khởi tạo translation hooks
```typescript
export default function ServiceDetailPage() {
  // Hook cho specific service data
  const t = useTranslations('serviceDetailPage.googleAds');

  // Hooks cho common sections
  const tCommon = useTranslations('serviceDetailPage.common');
  const tCta = useTranslations('serviceDetailPage.cta');
  const tHeroSteps = useTranslations('serviceDetailPage.heroSteps');
  const tSections = useTranslations('serviceDetailPage.sections');

  return (
    // JSX code...
  );
}
```

### 3. Sử dụng translations trong JSX

#### Text đơn giản:
```typescript
<h1>{t('hero.heading1')}</h1>
<p>{t('aboutService.description')}</p>
```

#### Text với parameters:
```typescript
<h2>{tCta('heading', { serviceName: t('shortName') })}</h2>
```

#### Array/List data:
```typescript
// Sử dụng t.raw() để lấy raw array data
{t.raw('aboutService.benefits').map((benefit: string, index: number) => (
  <li key={index}>{benefit}</li>
))}
```

#### Object data:
```typescript
// Access nested properties
{['searchAds', 'displayAds', 'videoAds'].map((platform) => (
  <div key={platform}>
    <h4>{t(`aboutService.platforms.${platform}.name`)}</h4>
    <p>{t(`aboutService.platforms.${platform}.desc`)}</p>
  </div>
))}
```

## File Tham Khảo

### 📁 `app/dich-vu/[slug]/page-i18n-example.tsx`
File này chứa ví dụ đầy đủ cách implement i18n cho:
- Hero section với 3 steps
- About Service section với platforms grid
- Benefits list
- CTA section

Bạn có thể tham khảo file này để áp dụng cho toàn bộ trang `page.tsx`.

## Các Bước Triển Khai

### Bước 1: Chuyển đổi component sang Client Component
Thêm directive `'use client';` ở đầu file nếu chưa có.

### Bước 2: Import và khởi tạo translation hooks
```typescript
import { useTranslations } from 'next-intl';

const t = useTranslations('serviceDetailPage.googleAds');
const tCommon = useTranslations('serviceDetailPage.common');
// ... các hooks khác
```

### Bước 3: Thay thế hardcoded text bằng translation keys
**Trước:**
```typescript
<h1>Dịch Vụ Quảng Cáo Google Ads Chuyên Nghiệp</h1>
```

**Sau:**
```typescript
<h1>{t('hero.heading1')}</h1>
```

### Bước 4: Xử lý data động (arrays, objects)
**Trước:**
```typescript
const platforms = [
  { name: 'Search Ads', desc: 'Công cụ tìm kiếm Google' },
  // ...
];
```

**Sau:**
```typescript
{['searchAds', 'displayAds', 'videoAds'].map((platform) => (
  <div key={platform}>
    <h4>{t(`aboutService.platforms.${platform}.name`)}</h4>
    <p>{t(`aboutService.platforms.${platform}.desc`)}</p>
  </div>
))}
```

### Bước 5: Test với cả 2 ngôn ngữ
- Chuyển đổi ngôn ngữ sử dụng LanguageSwitcher ở Navbar
- Kiểm tra tất cả các sections hiển thị đúng
- Verify không có translation keys bị thiếu

## Lưu Ý Quan Trọng

1. **Client Component**: Vì sử dụng `useTranslations` hook, component phải là Client Component (`'use client'`)

2. **Translation Keys**: Đảm bảo tất cả keys trong code đều có trong cả `vi.json` và `en.json`

3. **Fallback**: Nếu key không tồn tại, next-intl sẽ hiển thị key name để dễ debug

4. **LocalStorage**: Ngôn ngữ đã chọn được lưu trong localStorage, tự động load lại khi user quay lại

5. **SEO**: Để tối ưu SEO, xem xét sử dụng dynamic routes với locale prefix (ví dụ: `/vi/dich-vu/...`, `/en/services/...`)

## Mở Rộng

### Thêm ngôn ngữ mới
1. Tạo file mới trong `messages/` (ví dụ: `ja.json` cho tiếng Nhật)
2. Cập nhật `LocaleProvider.tsx` để hỗ trợ locale mới
3. Cập nhật `LanguageSwitcher.tsx` để thêm option mới

### Thêm service mới
1. Thêm section mới trong `messages/vi.json` và `messages/en.json`:
```json
"serviceDetailPage": {
  "newService": {
    "hero": { ... },
    "aboutService": { ... },
    // ...
  }
}
```

2. Sử dụng trong component:
```typescript
const t = useTranslations('serviceDetailPage.newService');
```

## Hỗ Trợ

Nếu có vấn đề, kiểm tra:
1. Console logs để xem errors
2. Đảm bảo translation keys match giữa code và JSON files
3. Verify component được wrap bởi LocaleProvider (đã có trong layout.tsx)

## Tài Liệu Tham Khảo

- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- [Next.js i18n Routing](https://nextjs.org/docs/app/building-your-application/routing/internationalization)
