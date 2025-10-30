# Contact Form API Integration Guide

> **Complete documentation for integrating Contact Form submission with CRM Ads system**

## Table of Contents
- [API Overview](#api-overview)
- [Endpoint Details](#endpoint-details)
- [Request Format](#request-format)
- [Response Format](#response-format)
- [Anti-Spam Logic](#anti-spam-logic)
- [Integration Examples](#integration-examples)
- [Error Handling](#error-handling)
- [Testing Guide](#testing-guide)
- [Environment Setup](#environment-setup)

---

## API Overview

**Endpoint:** `POST {BASE_URL}/api/contact-forms`

**Authentication:** None required (Public endpoint)

**Purpose:** Submit contact form from landing pages, marketing websites, or any external source

**Anti-Spam Protection:** Built-in 24-hour duplicate email detection

**What happens when you submit:**
1. Form data is validated
2. Email duplicate check (last 24 hours)
3. Contact form saved to database
4. If NOT duplicate: Admin/Sale team notified via email + in-app notification
5. If NOT duplicate: Customer receives confirmation email
6. Success response returned

---

## Endpoint Details

### URL
```
POST https://your-crm-domain.com/api/contact-forms
```

### Headers
```
Content-Type: application/json
```

### CORS
This endpoint accepts requests from any origin (CORS enabled for public access)

---

## Request Format

### Required Fields

| Field | Type | Max Length | Description | Example |
|-------|------|------------|-------------|---------|
| `name` | string | 255 chars | Full name of person submitting | "Nguyễn Văn A" |
| `email` | string | 255 chars | Valid email address | "nguyenvana@example.com" |
| `phone` | string | 20 chars | Phone number | "0901234567" |
| `service` | string | 100 chars | Service interested in | "Google Ads", "Facebook Ads", "TikTok Ads" |
| `message` | string | unlimited | Message/inquiry from customer | "Tôi muốn tư vấn về..." |

### Validation Rules
- All fields are **required**
- Email must be valid format
- Phone should be valid phone number format
- Service should match one of your service offerings (flexible)
- Message minimum length: 10 characters (recommended)

### Request Body Example

```json
{
  "name": "Nguyễn Văn A",
  "email": "nguyenvana@example.com",
  "phone": "0901234567",
  "service": "Google Ads",
  "message": "Tôi muốn tư vấn về dịch vụ chạy quảng cáo Google Ads cho doanh nghiệp của tôi. Vui lòng liên hệ lại sớm nhất."
}
```

---

## Response Format

### Success Response (200 OK)

```json
{
  "id": "550e8400-e29b-41d4-a716-446655440000",
  "message": "Đã gửi thông tin thành công. Chúng tôi sẽ liên hệ với bạn sớm!"
}
```

**Fields:**
- `id` (string): UUID of the created contact form record
- `message` (string): Success message in Vietnamese

**Note:** Same response is returned whether it's a duplicate or not (for security reasons, we don't reveal duplicate detection to user)

### Error Responses

#### 400 Bad Request - Validation Error
```json
{
  "statusCode": 400,
  "message": [
    "name should not be empty",
    "email must be a valid email"
  ],
  "error": "Bad Request"
}
```

#### 500 Internal Server Error
```json
{
  "statusCode": 500,
  "message": "Internal server error",
  "error": "Internal Server Error"
}
```

---

## Anti-Spam Logic

### How it works:

1. **First submission or > 24h since last submission:**
   - ✅ Contact form saved to database
   - ✅ Admin/Sale team receives email notification
   - ✅ Admin/Sale team receives in-app notification
   - ✅ Customer receives confirmation email
   - ✅ Success response returned

2. **Duplicate email within 24 hours:**
   - ✅ Contact form saved to database
   - ❌ NO email to Admin/Sale team
   - ❌ NO in-app notification
   - ❌ NO confirmation email to customer
   - ✅ Same success response returned (user doesn't know it's a duplicate)

### Why this approach?
- Prevents spam from same email
- Still logs all submissions for analytics
- Doesn't discourage legitimate follow-ups (after 24h)
- User experience remains the same

---

## Integration Examples

### 1. Pure JavaScript with Fetch

```javascript
async function submitContactForm(formData) {
  const API_URL = 'https://your-crm-domain.com/api/contact-forms';

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to submit form');
    }

    const result = await response.json();
    console.log('Success:', result);
    return result;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

// Usage
const formData = {
  name: document.getElementById('name').value,
  email: document.getElementById('email').value,
  phone: document.getElementById('phone').value,
  service: document.getElementById('service').value,
  message: document.getElementById('message').value,
};

submitContactForm(formData)
  .then(result => {
    alert(result.message);
    // Reset form or redirect
  })
  .catch(error => {
    alert('Có lỗi xảy ra. Vui lòng thử lại.');
  });
```

### 2. Axios

```javascript
import axios from 'axios';

const API_URL = 'https://your-crm-domain.com/api/contact-forms';

async function submitContactForm(formData) {
  try {
    const response = await axios.post(API_URL, formData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error) {
    if (error.response) {
      // Server responded with error
      throw new Error(error.response.data.message || 'Failed to submit form');
    } else if (error.request) {
      // Request made but no response
      throw new Error('Không thể kết nối đến server. Vui lòng kiểm tra kết nối mạng.');
    } else {
      // Something else happened
      throw new Error('Có lỗi xảy ra. Vui lòng thử lại.');
    }
  }
}

// Usage
submitContactForm({
  name: 'Nguyễn Văn A',
  email: 'nguyenvana@example.com',
  phone: '0901234567',
  service: 'Google Ads',
  message: 'Tôi muốn tư vấn về dịch vụ...',
})
  .then(result => {
    console.log('Success:', result);
    alert(result.message);
  })
  .catch(error => {
    console.error('Error:', error);
    alert(error.message);
  });
```

### 3. React Hook Form Example

```jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const API_URL = 'https://your-crm-domain.com/api/contact-forms';

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [submitResult, setSubmitResult] = useState(null);

  const onSubmit = async (data) => {
    setSubmitting(true);
    setSubmitResult(null);

    try {
      const response = await axios.post(API_URL, data);
      setSubmitResult({ success: true, message: response.data.message });
      reset(); // Clear form
    } catch (error) {
      setSubmitResult({
        success: false,
        message: error.response?.data?.message || 'Có lỗi xảy ra. Vui lòng thử lại.'
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <label htmlFor="name">Họ và tên *</label>
        <input
          id="name"
          {...register('name', { required: 'Vui lòng nhập họ tên' })}
          className="form-input"
        />
        {errors.name && <p className="error">{errors.name.message}</p>}
      </div>

      <div>
        <label htmlFor="email">Email *</label>
        <input
          id="email"
          type="email"
          {...register('email', {
            required: 'Vui lòng nhập email',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Email không hợp lệ'
            }
          })}
          className="form-input"
        />
        {errors.email && <p className="error">{errors.email.message}</p>}
      </div>

      <div>
        <label htmlFor="phone">Số điện thoại *</label>
        <input
          id="phone"
          {...register('phone', { required: 'Vui lòng nhập số điện thoại' })}
          className="form-input"
        />
        {errors.phone && <p className="error">{errors.phone.message}</p>}
      </div>

      <div>
        <label htmlFor="service">Dịch vụ quan tâm *</label>
        <select
          id="service"
          {...register('service', { required: 'Vui lòng chọn dịch vụ' })}
          className="form-select"
        >
          <option value="">-- Chọn dịch vụ --</option>
          <option value="Google Ads">Google Ads</option>
          <option value="Facebook Ads">Facebook Ads</option>
          <option value="TikTok Ads">TikTok Ads</option>
          <option value="Tư vấn tổng thể">Tư vấn tổng thể</option>
        </select>
        {errors.service && <p className="error">{errors.service.message}</p>}
      </div>

      <div>
        <label htmlFor="message">Nội dung *</label>
        <textarea
          id="message"
          rows={4}
          {...register('message', {
            required: 'Vui lòng nhập nội dung',
            minLength: { value: 10, message: 'Nội dung quá ngắn' }
          })}
          className="form-textarea"
        />
        {errors.message && <p className="error">{errors.message.message}</p>}
      </div>

      {submitResult && (
        <div className={submitResult.success ? 'success-message' : 'error-message'}>
          {submitResult.message}
        </div>
      )}

      <button type="submit" disabled={submitting} className="submit-button">
        {submitting ? 'Đang gửi...' : 'Gửi yêu cầu'}
      </button>
    </form>
  );
}
```

### 4. Next.js Server Action (App Router)

```typescript
// app/actions/contact-form.ts
'use server';

export async function submitContactForm(formData: FormData) {
  const API_URL = process.env.NEXT_PUBLIC_API_URL + '/api/contact-forms';

  const data = {
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    service: formData.get('service') as string,
    message: formData.get('message') as string,
  };

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      return { success: false, error: error.message };
    }

    const result = await response.json();
    return { success: true, data: result };
  } catch (error) {
    return { success: false, error: 'Network error' };
  }
}
```

```jsx
// app/contact/page.tsx
'use client';

import { submitContactForm } from './actions/contact-form';
import { useFormState, useFormStatus } from 'react-dom';

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? 'Đang gửi...' : 'Gửi yêu cầu'}
    </button>
  );
}

export default function ContactPage() {
  const [state, formAction] = useFormState(submitContactForm, null);

  return (
    <form action={formAction}>
      <input name="name" required placeholder="Họ và tên" />
      <input name="email" type="email" required placeholder="Email" />
      <input name="phone" required placeholder="Số điện thoại" />
      <select name="service" required>
        <option value="">-- Chọn dịch vụ --</option>
        <option value="Google Ads">Google Ads</option>
        <option value="Facebook Ads">Facebook Ads</option>
      </select>
      <textarea name="message" required placeholder="Nội dung"></textarea>

      {state?.success && <p className="success">{state.data.message}</p>}
      {state?.error && <p className="error">{state.error}</p>}

      <SubmitButton />
    </form>
  );
}
```

### 5. cURL Command

```bash
curl -X POST https://your-crm-domain.com/api/contact-forms \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Nguyễn Văn A",
    "email": "nguyenvana@example.com",
    "phone": "0901234567",
    "service": "Google Ads",
    "message": "Tôi muốn tư vấn về dịch vụ chạy quảng cáo Google Ads"
  }'
```

---

## Error Handling

### Error Handling Best Practices

```javascript
async function submitWithProperErrorHandling(formData) {
  const API_URL = 'https://your-crm-domain.com/api/contact-forms';

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    // Parse response
    const result = await response.json();

    if (!response.ok) {
      // Server returned error
      if (response.status === 400) {
        // Validation error
        const errors = Array.isArray(result.message)
          ? result.message.join(', ')
          : result.message;
        throw new Error(`Dữ liệu không hợp lệ: ${errors}`);
      } else if (response.status === 500) {
        // Server error
        throw new Error('Lỗi hệ thống. Vui lòng thử lại sau.');
      } else {
        throw new Error(result.message || 'Có lỗi xảy ra');
      }
    }

    // Success
    return { success: true, data: result };

  } catch (error) {
    // Network error or exception
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      return {
        success: false,
        error: 'Không thể kết nối đến server. Vui lòng kiểm tra kết nối mạng.'
      };
    }

    return { success: false, error: error.message };
  }
}
```

### Common Error Scenarios

| Error Type | Status Code | Cause | Solution |
|------------|-------------|-------|----------|
| Validation Error | 400 | Missing or invalid fields | Check all required fields are provided and valid |
| Server Error | 500 | Internal server issue | Retry after a few seconds, contact support if persists |
| Network Error | - | No internet connection | Check internet connection |
| CORS Error | - | Domain not whitelisted | Contact CRM admin to whitelist your domain |

---

## Testing Guide

### How to Test

1. **Using Browser DevTools Console:**
```javascript
fetch('https://your-crm-domain.com/api/contact-forms', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test User',
    email: 'test@example.com',
    phone: '0901234567',
    service: 'Google Ads',
    message: 'This is a test message'
  })
})
.then(res => res.json())
.then(data => console.log('Success:', data))
.catch(err => console.error('Error:', err));
```

2. **Using Postman:**
   - Method: POST
   - URL: `https://your-crm-domain.com/api/contact-forms`
   - Headers: `Content-Type: application/json`
   - Body (raw JSON): See request example above

3. **Expected Behaviors:**
   - First submission: Should receive success response + Admin receives email
   - Second submission (same email within 24h): Success response but no email sent
   - Invalid data: Should receive 400 error with validation messages

### Test Cases

| Test Case | Input | Expected Output |
|-----------|-------|-----------------|
| Valid submission (first time) | All fields valid | 200 OK + Admin email sent |
| Duplicate within 24h | Same email as test 1 | 200 OK + NO admin email |
| Missing required field | Omit `name` | 400 Bad Request |
| Invalid email format | `email: "invalid"` | 400 Bad Request |
| Empty message | `message: ""` | 400 Bad Request |

---

## Environment Setup

### Configuration Required

1. **API Base URL**
   - Development: `http://localhost:3001`
   - Production: `https://your-crm-domain.com`

2. **Environment Variables**

```env
# .env.local (Next.js) or .env (React)
NEXT_PUBLIC_API_URL=https://your-crm-domain.com
```

```javascript
// config.js
export const API_CONFIG = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',
  contactFormEndpoint: '/api/contact-forms',
};
```

3. **CORS Configuration**
   - CRM API already configured to accept requests from any origin
   - No additional CORS setup needed on client side

---

## Support

### Need Help?

- **Technical Issues:** Contact development team at dev@hotdealmedia.com
- **API Questions:** Email admin@hotdealmedia.com
- **Documentation:** Check latest docs at project repository

### Additional Resources

- Main CRM Documentation: `docs/CONTACT_FORM_MANAGEMENT.md`
- Email Templates: `backend/src/mail/templates/index.ts`
- Backend Service: `backend/src/contact-forms/contact-forms.service.ts`

---

**Last Updated:** 2025-10-30
**API Version:** 1.0
**Status:** Production Ready
