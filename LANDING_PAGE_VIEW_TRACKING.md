# 📊 Blog View Tracking Integration Guide

> **Hướng dẫn tích hợp View Tracking cho Landing Page Blog**
> **Compatible with:** Next.js ISR, React, Vue, Angular
> **Last Updated:** 2025-01-11

---

## 🎯 Tại sao cần Client-Side View Tracking?

### Vấn đề với ISR (Incremental Static Regeneration):

```
Scenario: Next.js ISR với revalidate = 60s

Request 1-100 (trong 60s đầu):
├─ Next.js serve HTML từ cache
├─ KHÔNG gọi API
└─ View count KHÔNG tăng ❌

Request 101 (sau 60s):
├─ Background: Rebuild page → Gọi API → +1 view
└─ 100 lượt xem → chỉ +1 view counter ❌
```

### Giải pháp:

**Tách riêng 2 API:**
1. `GET /blog-posts/public/:slug` - Lấy nội dung (ISR cache được)
2. `POST /blog-posts/:slug/increment-view` - Client-side tăng view count

**Kết quả:**
- ✅ ISR vẫn hoạt động → SEO tốt, performance cao
- ✅ View count chính xác 100% (mỗi lượt xem = +1 view)
- ✅ Landing page không cần rebuild khi có post mới

---

## 📡 API Endpoint

### Increment View Count

**Endpoint:** `POST https://app.hotdealmedia.com/api/blog-posts/:slug/increment-view`

**Method:** POST

**Authentication:** Không cần (Public endpoint)

**Parameters:**
- `slug` (path parameter) - Blog post slug

**Request:**
```bash
curl -X POST https://app.hotdealmedia.com/api/blog-posts/10-tips-facebook-ads/increment-view
```

**Response:**
```json
{
  "success": true
}
```

**Error Response (404):**
```json
{
  "statusCode": 404,
  "message": "Published blog post with slug \"invalid-slug\" not found"
}
```

---

## 🔧 Implementation Guide

### Next.js (Recommended)

#### 1. Tạo ViewTracker Component

**File:** `components/ViewTracker.tsx`

```tsx
'use client';

import { useEffect, useRef } from 'react';

interface ViewTrackerProps {
  slug: string;
}

export default function ViewTracker({ slug }: ViewTrackerProps) {
  const tracked = useRef(false);

  useEffect(() => {
    // Prevent double tracking (React 18 Strict Mode)
    if (tracked.current) return;
    tracked.current = true;

    // Check if already tracked in this session
    const sessionKey = `blog_view_${slug}`;
    const hasTracked = sessionStorage.getItem(sessionKey);

    if (hasTracked) {
      console.log('[ViewTracker] Already tracked in this session:', slug);
      return;
    }

    // Track view
    const trackView = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/blog-posts/${slug}/increment-view`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
          }
        );

        if (response.ok) {
          // Mark as tracked
          sessionStorage.setItem(sessionKey, 'true');
          console.log('[ViewTracker] View tracked successfully:', slug);
        } else {
          console.error('[ViewTracker] Failed to track view:', response.status);
        }
      } catch (error) {
        console.error('[ViewTracker] Error tracking view:', error);
        // Fail silently - don't break user experience
      }
    };

    // Track after a short delay (ensure user is actually viewing)
    const timer = setTimeout(trackView, 1000);

    return () => clearTimeout(timer);
  }, [slug]);

  return null; // No UI
}
```

#### 2. Sử dụng trong Blog Post Page

**File:** `app/post/[slug]/page.tsx`

```tsx
import ViewTracker from '@/components/ViewTracker';
import { blogApi } from '@/lib/api/blog';
import { notFound } from 'next/navigation';

export default async function PostPage({
  params,
}: {
  params: { slug: string };
}) {
  let post;

  try {
    // Server-side: Lấy content (ISR cached)
    post = await blogApi.getPostBySlug(params.slug);
  } catch (error) {
    notFound();
  }

  return (
    <>
      {/* Client-side view tracking */}
      <ViewTracker slug={params.slug} />

      {/* Static HTML content */}
      <article className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </>
  );
}

// ISR: Revalidate every 60 seconds
export const revalidate = 60;
```

---

### React (CSR/SSR)

```tsx
import { useEffect, useRef } from 'react';

function BlogPostPage({ slug }) {
  const tracked = useRef(false);

  useEffect(() => {
    if (tracked.current) return;
    tracked.current = true;

    const sessionKey = `blog_view_${slug}`;
    if (sessionStorage.getItem(sessionKey)) return;

    setTimeout(async () => {
      try {
        await fetch(
          `https://app.hotdealmedia.com/api/blog-posts/${slug}/increment-view`,
          { method: 'POST' }
        );
        sessionStorage.setItem(sessionKey, 'true');
      } catch (error) {
        console.error('Failed to track view:', error);
      }
    }, 1000);
  }, [slug]);

  return <article>{/* Your content */}</article>;
}
```

---

### Vue 3

```vue
<template>
  <article>
    <!-- Your blog content -->
  </article>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
  slug: {
    type: String,
    required: true,
  },
});

const tracked = ref(false);

onMounted(() => {
  if (tracked.value) return;
  tracked.value = true;

  const sessionKey = `blog_view_${props.slug}`;
  if (sessionStorage.getItem(sessionKey)) return;

  setTimeout(async () => {
    try {
      await fetch(
        `https://app.hotdealmedia.com/api/blog-posts/${props.slug}/increment-view`,
        { method: 'POST' }
      );
      sessionStorage.setItem(sessionKey, 'true');
    } catch (error) {
      console.error('Failed to track view:', error);
    }
  }, 1000);
});
</script>
```

---

### Vanilla JavaScript

```html
<script>
  (function() {
    const slug = 'your-post-slug'; // Get from URL or data attribute
    const sessionKey = `blog_view_${slug}`;

    // Check if already tracked
    if (sessionStorage.getItem(sessionKey)) return;

    // Track after 1 second
    setTimeout(function() {
      fetch(`https://app.hotdealmedia.com/api/blog-posts/${slug}/increment-view`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      })
      .then(function(response) {
        if (response.ok) {
          sessionStorage.setItem(sessionKey, 'true');
          console.log('View tracked successfully');
        }
      })
      .catch(function(error) {
        console.error('Failed to track view:', error);
      });
    }, 1000);
  })();
</script>
```

---

## 🛡️ Best Practices

### 1. Prevent Double Tracking

**Problem:** React 18 Strict Mode gọi useEffect 2 lần

**Solution:** Sử dụng `useRef`
```tsx
const tracked = useRef(false);
if (tracked.current) return;
tracked.current = true;
```

### 2. Session-Based Deduplication

**Problem:** User refresh page nhiều lần

**Solution:** Dùng `sessionStorage`
```tsx
const sessionKey = `blog_view_${slug}`;
if (sessionStorage.getItem(sessionKey)) return;
sessionStorage.setItem(sessionKey, 'true');
```

**Note:** `sessionStorage` xóa khi đóng tab. User mở tab mới = view mới.

### 3. Delay Tracking

**Problem:** User click vào rồi thoát ngay (bounce)

**Solution:** Delay 1-2 giây
```tsx
setTimeout(trackView, 1000);
```

### 4. Error Handling

**Problem:** API fail không nên break trang

**Solution:** Fail silently
```tsx
try {
  await fetch(...);
} catch (error) {
  console.error(error);
  // Don't throw - fail gracefully
}
```

### 5. Cleanup

**Problem:** Component unmount trước khi tracking xong

**Solution:** Clear timeout
```tsx
const timer = setTimeout(trackView, 1000);
return () => clearTimeout(timer);
```

---

## 🧪 Testing

### 1. Local Testing

```bash
# Terminal 1: Start backend (if testing locally)
cd backend
npm run start:dev

# Terminal 2: Start landing page
cd landing-page
npm run dev
```

Visit: `http://localhost:3000/post/test-slug`

**Check:**
1. Open DevTools → Network tab
2. Sau 1 giây, phải thấy request: `POST /blog-posts/test-slug/increment-view`
3. Response: `{"success": true}`
4. Refresh page → Không thấy request nữa (đã tracked)
5. Mở Incognito/Private window → Thấy request lại (new session)

### 2. Database Verification

```sql
-- Before visit
SELECT slug, view_count FROM blog_posts WHERE slug = 'test-slug';
-- view_count = 10

-- Visit page

-- After visit
SELECT slug, view_count FROM blog_posts WHERE slug = 'test-slug';
-- view_count = 11 ✅
```

### 3. Production Testing

```bash
curl -X POST https://app.hotdealmedia.com/api/blog-posts/test-slug/increment-view
```

Expected: `{"success":true}`

---

## 📊 View Count Display

### Option 1: Static (từ ISR cache)

```tsx
// Server Component
export default async function PostPage({ params }) {
  const post = await blogApi.getPostBySlug(params.slug);

  return (
    <div>
      <span>{post.view_count} lượt xem</span>
      <ViewTracker slug={params.slug} />
    </div>
  );
}

export const revalidate = 60;
```

**Pros:**
- ✅ SEO tốt (view count có trong HTML)
- ✅ Không cần API call thêm

**Cons:**
- ⚠️ View count có thể delay 60s (ISR cache)
- ⚠️ User xem realtime có thể thấy số cũ

---

### Option 2: Dynamic (realtime)

```tsx
'use client';

import { useState, useEffect } from 'react';

export default function ViewCount({ slug, initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchLatestCount = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/blog-posts/public/${slug}`
        );
        const data = await response.json();
        setCount(data.view_count);
      } catch (error) {
        console.error('Failed to fetch view count:', error);
      } finally {
        setLoading(false);
      }
    };

    // Fetch latest count after tracking
    const timer = setTimeout(fetchLatestCount, 2000);
    return () => clearTimeout(timer);
  }, [slug]);

  return (
    <span>
      {loading ? '...' : count.toLocaleString()} lượt xem
    </span>
  );
}
```

**Pros:**
- ✅ View count realtime
- ✅ User thấy số mới ngay

**Cons:**
- ⚠️ Thêm 1 API call
- ⚠️ Không SEO friendly (số trong HTML ban đầu vẫn cũ)

**Recommendation:** Dùng Option 1 (Static) - đơn giản hơn, view count delay 60s là chấp nhận được.

---

## ⚠️ Rate Limiting (Optional)

Nếu lo spam, có thể thêm rate limiting:

### Backend (NestJS + Throttler)

```bash
npm install @nestjs/throttler
```

```typescript
// app.module.ts
import { ThrottlerModule } from '@nestjs/throttler';

@Module({
  imports: [
    ThrottlerModule.forRoot({
      ttl: 60,
      limit: 10, // Max 10 requests per 60s per IP
    }),
  ],
})

// blog-posts.controller.ts
import { Throttle } from '@nestjs/throttler';

@Post(':slug/increment-view')
@Throttle(1, 60) // Max 1 view per 60s per IP per slug
async incrementView(@Param('slug') slug: string) {
  return this.blogPostsService.incrementViewBySlug(slug);
}
```

---

## 🐛 Troubleshooting

### Issue 1: View không tăng

**Check:**
```bash
# 1. API có hoạt động không?
curl -X POST https://app.hotdealmedia.com/api/blog-posts/test-slug/increment-view

# 2. Check CORS
# Browser console có lỗi CORS không?

# 3. Check sessionStorage
# Browser DevTools → Application → Session Storage
# Xóa key `blog_view_*` và thử lại
```

### Issue 2: View tăng 2 lần

**Cause:** React 18 Strict Mode

**Fix:** Dùng `useRef` như ví dụ trên

### Issue 3: CORS Error

**Error:**
```
Access to fetch at 'https://app.hotdealmedia.com/api/blog-posts/test/increment-view'
from origin 'https://hotdealmedia.com' has been blocked by CORS policy
```

**Fix:** Thêm domain vào backend `.env`
```bash
FRONTEND_URL=https://hotdealmedia.com,https://www.hotdealmedia.com
```

---

## 📞 Support

**Backend API Issues:**
- Contact: Backend Team
- Email: dev@hotdealmedia.com

**Landing Page Integration:**
- Check API status: `GET https://app.hotdealmedia.com/api/health`
- API Docs: `./BLOG_API_DOCUMENTATION.md`

---

## ✅ Checklist

Before deploying:

- [ ] ViewTracker component implemented
- [ ] Added to blog post page
- [ ] Test locally - view count tăng khi visit
- [ ] Test sessionStorage - không tăng khi refresh
- [ ] Test incognito - tăng lại (new session)
- [ ] Check database - view_count tăng đúng
- [ ] Test production API endpoint
- [ ] Add error logging (Sentry/LogRocket)
- [ ] Deploy to production
- [ ] Monitor view counts in database

---

## 🎉 Done!

View tracking đã sẵn sàng. ISR vẫn hoạt động bình thường, view count chính xác 100%.

**Questions?** Contact backend team hoặc check `BLOG_API_DOCUMENTATION.md`
