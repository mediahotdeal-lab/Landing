/**
 * Blog API Client
 *
 * API functions for fetching blog data from the backend
 */

import { BlogCategory, BlogPost, BlogPostsResponse } from '@/types/blog';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const blogApi = {
  /**
   * Fetch all blog categories
   */
  async getCategories(): Promise<BlogCategory[]> {
    const res = await fetch(`${API_URL}/api/blog-categories/public`, {
      next: { revalidate: 300 }, // Cache 5 minutes
    });

    if (!res.ok) {
      throw new Error('Failed to fetch categories');
    }

    return res.json();
  },

  /**
   * Fetch blog posts with optional filters
   */
  async getPosts(params?: {
    page?: number;
    limit?: number;
    category_id?: string;
    search?: string;
  }): Promise<BlogPostsResponse> {
    const query = new URLSearchParams();

    if (params?.page) query.set('page', params.page.toString());
    if (params?.limit) query.set('limit', params.limit.toString());
    if (params?.category_id) query.set('category_id', params.category_id);
    if (params?.search) query.set('search', params.search);

    const res = await fetch(
      `${API_URL}/api/blog-posts/public?${query.toString()}`,
      {
        next: { revalidate: 60 }, // Cache 1 minute (ISR)
      }
    );

    if (!res.ok) {
      throw new Error('Failed to fetch posts');
    }

    return res.json();
  },

  /**
   * Fetch a single blog post by slug
   */
  async getPostBySlug(slug: string): Promise<BlogPost> {
    const res = await fetch(`${API_URL}/api/blog-posts/public/${slug}`, {
      next: { revalidate: 60 }, // Cache 1 minute (ISR)
    });

    if (!res.ok) {
      if (res.status === 404) {
        throw new Error('Post not found');
      }
      throw new Error('Failed to fetch post');
    }

    return res.json();
  },
};
