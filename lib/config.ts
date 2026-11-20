/**
 * API Configuration
 *
 * This file contains configuration for external API endpoints
 */

export const API_CONFIG = {
  // Base URL for the CRM API
  // Development: http://localhost:3001
  // Production: Update this with your production API URL
  baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001',

  // Contact form endpoint
  contactFormEndpoint: '/api/contact-forms',
};

/**
 * URL the browser posts contact forms to.
 * Same-origin route (app/api/contact-forms/route.ts) that forwards to the CRM server-side,
 * avoiding mixed-content and CORS failures when the CRM is called directly from the page.
 */
export function getContactFormURL(): string {
  return API_CONFIG.contactFormEndpoint;
}
