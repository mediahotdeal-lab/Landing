# HotDeal Media Landing Page

Landing page hiện đại cho Digital Marketing Agency được xây dựng với Next.js 15, TypeScript và Tailwind CSS.

## ✨ Tính năng

- 🚀 **Next.js 15** với App Router - SSR/SSG cho SEO tối ưu
- 💎 **TypeScript** - Type-safe code
- 🎨 **Tailwind CSS** - Styling hiện đại và responsive
- 📱 **Responsive Design** - Tương thích mọi thiết bị
- ⚡ **Performance** - Tối ưu tốc độ tải trang
- 🔍 **SEO Optimized** - Meta tags, sitemap, robots.txt
- 🎯 **Interactive Components** - Animations và transitions mượt mà

## 📦 Cấu trúc Project

```
ads-landing/
├── app/
│   ├── layout.tsx       # Root layout với SEO metadata
│   ├── page.tsx         # Homepage
│   ├── globals.css      # Global styles
│   ├── sitemap.ts       # SEO sitemap
│   └── robots.ts        # Robots.txt
├── components/
│   ├── Navbar.tsx       # Navigation component
│   ├── Hero.tsx         # Hero section với CTA
│   ├── Services.tsx     # Services section
│   ├── About.tsx        # About/Why Choose Us
│   ├── Stats.tsx        # Statistics với counter animation
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer component
└── public/
    └── manifest.json    # PWA manifest
```

## 🚀 Cài đặt và Chạy

### Yêu cầu
- Node.js 18+
- npm hoặc yarn

### Cài đặt dependencies

```bash
cd ads-landing
npm install
```

### Chạy development server

```bash
npm run dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem kết quả.

### Build cho production

```bash
npm run build
npm start
```

## 📄 Các sections trong Landing Page

1. **Hero Section** - Header với value proposition và CTA buttons
2. **Services** - 6 dịch vụ marketing chính
3. **About** - 6 lý do chọn HotDeal Media + CTA
4. **Stats** - Thống kê với counter animation
5. **Contact** - Form liên hệ + thông tin contact
6. **Footer** - Links và social media

## 🎨 Customization

### Thay đổi màu sắc
Chỉnh sửa file `app/globals.css`:

```css
:root {
  --primary: #ef4444;        /* Màu chính */
  --primary-dark: #dc2626;   /* Màu đậm hơn */
}
```

### Thay đổi nội dung
- **SEO Metadata**: `app/layout.tsx`
- **Hero content**: `components/Hero.tsx`
- **Services**: `components/Services.tsx`
- **Contact info**: `components/Contact.tsx` và `components/Footer.tsx`

### Thay đổi domain cho SEO
1. `app/sitemap.ts` - Cập nhật `baseUrl`
2. `app/robots.ts` - Cập nhật `sitemap` URL

## 📊 SEO Features

- ✅ Server-Side Rendering (SSR)
- ✅ Static Site Generation (SSG)
- ✅ Meta tags tối ưu
- ✅ Open Graph tags
- ✅ Twitter Card tags
- ✅ Sitemap.xml
- ✅ Robots.txt
- ✅ PWA manifest
- ✅ Semantic HTML
- ✅ Structured data ready

## 🛠️ Tech Stack

- **Framework**: Next.js 15.5.4
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Font**: Inter (Google Fonts)
- **Icons**: SVG inline icons

## 📝 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## 🌐 Deployment

### Vercel (Recommended)
```bash
vercel
```

### Netlify
```bash
npm run build
# Deploy thư mục .next
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
CMD ["npm", "start"]
```

## 📞 Liên hệ

- Website: https://hotdealmedia.com
- Email: contact@hotdealmedia.com
- Phone: (028) 7300 5757

## 📄 License

© 2025 HotDeal Media. All rights reserved.
