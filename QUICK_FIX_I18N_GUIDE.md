# Hướng Dẫn Quick Fix i18n cho Service Detail Page

## ✅ Đã hoàn thành

1. **LocaleProvider** - Đã cải thiện để F5 vẫn giữ ngôn ngữ
   - Sử dụng lazy initialization để load từ localStorage
   - Thêm loading state để tránh flash of wrong content

2. **Translations** - Đã thêm đầy đủ cho:
   - ✅ `messages/vi.json` - Google Ads & Website Design
   - ✅ `messages/en.json` - Google Ads & Website Design

3. **Components** - Đã tạo các client components:
   - ✅ `ServiceDetailHero.tsx` - Hero section với i18n
   - ✅ `ServiceDetailContent.tsx` - Badges và CTA components

## 🔧 Cần làm: Cập nhật page.tsx

### Bước 1: Import ServiceDetailHero

Mở file `app/dich-vu/[slug]/page.tsx` và thay đổi imports:

```typescript
// TRƯỚC:
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { services, Platform } from '../services-data';
import ProcessAccordion from '@/components/ProcessAccordion';
import PricingTable from '@/components/PricingTable';
import {
  HeroStepLabel,
  // ... other imports
} from '@/components/ServiceDetailContent';

// SAU:
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Metadata } from 'next';
import { services, Platform } from '../services-data';
import ProcessAccordion from '@/components/ProcessAccordion';
import PricingTable from '@/components/PricingTable';
import ServiceDetailHero from '@/components/ServiceDetailHero';  // ← THÊM DÒNG NÀY
import {
  HeroStepLabel,
  // ... other imports
} from '@/components/ServiceDetailContent';
```

### Bước 2: Thay thế toàn bộ Hero Section

Tìm phần code từ line 102 đến khoảng line 350 (toàn bộ Hero section), và thay thế bằng:

```typescript
return (
  <div className="min-h-screen bg-white">
    {/* Hero Section - Now with i18n */}
    <ServiceDetailHero service={service} />

    {/* Các sections khác giữ nguyên */}
    ...
  </div>
);
```

**Chi tiết hơn:**

Tìm đoạn code này (từ line ~102):
```typescript
<div className="min-h-screen bg-white">
  {/* Hero Section */}
  <section className="relative bg-white pt-24 sm:pt-32 pb-12 sm:pb-16 overflow-hidden">
    {/* Subtle grid background */}
    <div className="absolute inset-0 opacity-[0.03]" ...

    ... (rất nhiều code cho hero section)

  </section>
```

**XÓA** toàn bộ `<section>...</section>` đó và **THAY BẰNG**:

```typescript
<div className="min-h-screen bg-white">
  {/* Hero Section - Now with i18n support */}
  <ServiceDetailHero service={service} />

  {/* About Service Section - GIỮ NGUYÊN phần này */}
  <section className="relative py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 overflow-hidden">
    ...
```

## 🎯 Kiểm tra xem đã thành công chưa

1. Save file `page.tsx`
2. Mở http://localhost:3000/dich-vu/quang-cao-google-ads
3. Kiểm tra:
   - ✅ Hero title hiển thị bằng tiếng Việt
   - ✅ Click language switcher → chuyển sang tiếng Anh
   - ✅ F5 (refresh) → vẫn giữ ngôn ngữ Anh
   - ✅ Các badges và steps hiển thị đúng ngôn ngữ

## 📋 Tiếp theo: i18n cho các sections còn lại

Hiện tại còn các phần hardcoded text:

### 1. About Service Section
**Vị trí**: Sau Hero section
**Hardcoded text**:
- Line ~883: `"Liên hệ ngay"`
- Các text trong service description

**Giải pháp**: Đã có components như `AboutServiceBadge`, bạn có thể tạo thêm các client components tương tự cho từng section.

### 2. Metadata (SEO)
**Vị trí**: `generateMetadata` function
**Hardcoded text**:
- Line 39: `'Dịch vụ không tồn tại | HotDeal Media'`
- Line 40: `'Trang dịch vụ bạn tìm kiếm không tồn tại.'`

**Giải pháp**: Metadata phải là Server Component. Có 2 options:
- Option 1: Giữ metadata hardcoded (OK cho SEO vì Google index tốt hơn)
- Option 2: Tạo separate metadata files cho từng locale

## 💡 Tips

1. **Ưu tiên**: Focus vào user-facing content trước (Hero, CTA, Badges)
2. **Metadata**: Có thể để sau hoặc giữ hardcoded (không ảnh hưởng UX)
3. **Testing**: Test với cả tiếng Việt và English sau mỗi thay đổi

## 🐛 Troubleshooting

### Vấn đề: F5 vẫn mất ngôn ngữ
**Nguyên nhân**: LocaleProvider chưa mount
**Giải pháp**: Đảm bảo `layout.tsx` đã wrap children bằng LocaleProvider

### Vấn đề: Translation keys không hiển thị
**Nguyên nhân**: Keys không match giữa code và JSON files
**Giải pháp**:
```typescript
// Sai:
t('hero.title')  // Nhưng JSON có 'hero.heading1'

// Đúng:
t('hero.heading1')
```

### Vấn đề: Component không re-render khi đổi ngôn ngữ
**Nguyên nhân**: Component không phải Client Component
**Giải pháp**: Thêm `'use client';` ở đầu file

## 📊 Progress Tracking

- [x] LocaleProvider improvements
- [x] Translation files (vi.json, en.json)
- [x] ServiceDetailHero component
- [ ] Update page.tsx imports
- [ ] Replace Hero section
- [ ] Test với cả 2 ngôn ngữ
- [ ] (Optional) i18n cho các sections còn lại

## 🎓 Learning Resources

- [next-intl Documentation](https://next-intl-docs.vercel.app/)
- Tham khảo: `page-i18n-example.tsx` trong cùng thư mục
- Tham khảo: `I18N_IMPLEMENTATION_GUIDE.md` để biết chi tiết về cách sử dụng

---

**Lưu ý**: Sau khi thay đổi, hãy clear browser cache nếu thấy ngôn ngữ không đổi ngay lập tức.
