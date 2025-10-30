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
 * Get the full URL for contact form submission
 */
export function getContactFormURL(): string {
  return `${API_CONFIG.baseURL}${API_CONFIG.contactFormEndpoint}`;
}
