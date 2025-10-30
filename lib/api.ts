/**
 * API Service for Contact Form Submission
 *
 * This service handles all API calls related to contact forms
 * Following the API documentation from CONTACT_FORM_API_INTEGRATION.md
 */

import { getContactFormURL } from './config';

/**
 * Contact Form Data Interface
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

/**
 * API Response Interface
 */
export interface ContactFormResponse {
  id: string;
  message: string;
}

/**
 * Error Response Interface
 */
export interface ApiErrorResponse {
  statusCode: number;
  message: string | string[];
  error: string;
}

/**
 * Submit contact form to CRM API
 *
 * @param formData - The contact form data
 * @returns Promise with the API response
 * @throws Error with user-friendly message on failure
 */
export async function submitContactForm(
  formData: ContactFormData
): Promise<ContactFormResponse> {
  const apiUrl = getContactFormURL();

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    // Parse response body
    const result = await response.json();

    if (!response.ok) {
      // Handle error responses
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

    // Success response
    return result as ContactFormResponse;
  } catch (error) {
    // Network error or exception
    if (error instanceof TypeError && error.message.includes('fetch')) {
      throw new Error('Không thể kết nối đến server. Vui lòng kiểm tra kết nối mạng.');
    }

    // Re-throw error if it's already a custom error from above
    if (error instanceof Error) {
      throw error;
    }

    // Unknown error
    throw new Error('Có lỗi xảy ra. Vui lòng thử lại.');
  }
}
