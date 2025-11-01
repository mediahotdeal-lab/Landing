/**
 * Blog Type Definitions
 *
 * TypeScript interfaces for blog-related data structures
 */

export interface BlogCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  icon?: string;
  is_active: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featured_image_url?: string;
  is_featured: boolean;
  view_count: number;
  published_at?: string;
  created_at?: string;
  updated_at?: string;
  blog_categories?: BlogCategory;
  users: {
    full_name: string;
  };
}

export interface BlogPostsResponse {
  data: BlogPost[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}
