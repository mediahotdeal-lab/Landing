# Service Translation Keys Matrix

Tài liệu này liệt kê các optional translation keys và services nào sử dụng chúng.

## 📋 Optional Keys Matrix

| Key Path | googleAds | rental | websiteDesign | landingPage |
|----------|-----------|--------|---------------|-------------|
| `aboutService.platforms` | ✅ | ✅ | ❌ | ❌ |
| `aboutService.additionalText` | ✅ | ✅ | ❌ | ❌ |
| `features.intro` | ✅ | ✅ | ❌ | ✅ |
| `process.note` | ✅ | ✅ | ❌ | ❌ |
| `accountTypes` | ✅ | ✅ | ❌ | ❌ |
| `rentalModel` | ✅ | ✅ | ❌ | ❌ |
| `quickGuide` | ✅ | ✅ | ❌ | ❌ |
| `finalCTA` | ✅ | ✅ | ❌ | ✅ |

## 🔧 Required Keys (tất cả services đều có)

Các keys sau PHẢI có trong tất cả services:

- `shortName`
- `hero.heading` hoặc `hero.heading1` (tùy service)
- `heroDescription.context`
- `heroDescription.challenge`
- `heroDescription.solution`
- `aboutService.title`
- `aboutService.description`
- `aboutService.benefits`
- `whyChooseUs.title`
- `whyChooseUs.description`
- `whyChooseUs.points`
- `features.title`
- `features.items`
- `process.title`
- `process.steps`
- `packages.title`
- `packages.plans`
- `benefits`

## 📝 Khi thêm service mới

Khi thêm service mới, cần:

1. **Tạo translation keys** trong `messages/vi.json` và `messages/en.json`:
   ```json
   "serviceDetailPage": {
     "yourNewService": {
       // Required keys (xem danh sách trên)
       "shortName": "...",
       "hero": { ... },
       // ... etc

       // Optional keys (nếu cần)
       "finalCTA": { ... },
       "accountTypes": { ... }
     }
   }
   ```

2. **Map slug trong hook** (`hooks/useServiceTranslations.ts`):
   ```typescript
   const keyMap: Record<string, string> = {
     'your-new-slug': 'yourNewService',
     // ...
   };
   ```

3. **Kiểm tra optional keys**: Nếu service mới không cần một số optional keys, đảm bảo hook không cố gắng load chúng.

## 🚫 Common Errors

### MISSING_MESSAGE Error

Lỗi này xảy ra khi:
- Hook cố gắng truy cập một translation key không tồn tại
- Mặc dù có try-catch, `t.raw()` vẫn log error trước khi throw exception

**Giải pháp**: Kiểm tra service key trước khi gọi `t.raw()`:

```typescript
// ❌ Bad - sẽ gây lỗi nếu key không tồn tại
additionalText: (() => {
  try {
    return t.raw('aboutService.additionalText') || undefined;
  } catch {
    return undefined;
  }
})(),

// ✅ Good - kiểm tra service trước
additionalText: (() => {
  if (serviceKey !== 'googleAds' && serviceKey !== 'rental') {
    return undefined;
  }
  try {
    return t.raw('aboutService.additionalText') || undefined;
  } catch {
    return undefined;
  }
})(),
```

## 📊 Verification

Để kiểm tra tất cả keys đã đồng bộ:

```bash
node -e "
const vi = require('./messages/vi.json');
const en = require('./messages/en.json');

// Check if all services have matching structure
Object.keys(vi.serviceDetailPage).forEach(service => {
  const viKeys = Object.keys(vi.serviceDetailPage[service]);
  const enKeys = Object.keys(en.serviceDetailPage[service] || {});
  console.log(\`\${service}: VI=\${viKeys.length}, EN=\${enKeys.length}\`);
});
"
```

---

**Last Updated**: 2025-01-30
**Maintained By**: Development Team
