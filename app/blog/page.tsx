import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { blogApi } from '@/lib/api/blog';
import { BlogPost, BlogCategory } from '@/types/blog';
import { Metadata } from 'next';
import NewsletterSection from './components/NewsletterSection';

// Metadata for SEO
export const metadata: Metadata = {
  title: 'Blog & Insights - HotDeal Media',
  description: 'Khám phá các bài viết, tips và chiến lược marketing mới nhất từ đội ngũ chuyên gia của HotDeal Media',
};

export default async function BlogPage() {
  const t = await getTranslations('blogPage');

  // Fetch blog posts and categories from API
  let posts: BlogPost[] = [];
  let categories: BlogCategory[] = [];
  let error = false;

  try {
    const [postsResponse, categoriesResponse] = await Promise.all([
      blogApi.getPosts({ limit: 12 }),
      blogApi.getCategories(),
    ]);
    posts = postsResponse.data;
    categories = categoriesResponse.filter(cat => cat.is_active);
  } catch (err) {
    console.error('Failed to fetch blog data:', err);
    error = true;
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Subtle grid background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{
        backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 px-4">
        <div className="container mx-auto max-w-[1400px] text-center">
          <div className="inline-block mb-4 sm:mb-6">
            <span className="bg-red-50 text-red-600 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
              {t('hero.badge')}
            </span>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            {t('hero.description')}
          </p>
        </div>
      </section>

      {/* Categories Filter */}
      {categories.length > 0 && (
        <section className="relative py-6 px-4 bg-white border-b border-gray-200">
          <div className="container mx-auto max-w-[1400px]">
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                href="/blog"
                className="px-4 py-2 rounded-full border-2 border-red-600 text-red-600 font-semibold hover:bg-red-600 hover:text-white transition-colors"
              >
                {t('categories.all')}
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href={`/blog/category/${category.slug}`}
                  className="px-4 py-2 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-red-600 hover:text-red-600 transition-colors"
                >
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="relative py-12 sm:py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-[1400px]">
          {error ? (
            <div className="text-center py-12">
              <p className="text-red-600 mb-4">{t('error.loadFailed')}</p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">{t('empty.noPosts')}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {posts.map((post) => (
                <BlogPostCard key={post.id} post={post} readMoreText={t('post.readMore')} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <NewsletterSection />
    </main>
  );
}

// Blog Post Card Component
function BlogPostCard({ post, readMoreText }: { post: BlogPost; readMoreText: string }) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <article className="h-full bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-red-600 hover:shadow-xl transition-all hover:-translate-y-2">
        {/* Featured Image */}
        {post.featured_image_url ? (
          <div className="relative h-48 bg-gray-200 overflow-hidden">
            <Image
              src={post.featured_image_url}
              alt={post.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {post.is_featured && (
              <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                Featured
              </span>
            )}
          </div>
        ) : (
          <div className="relative h-48 bg-red-50 overflow-hidden">
            <div className="absolute inset-0 bg-red-500/10"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-16 h-16 text-red-600/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
            {post.published_at && (
              <>
                <span>{format(new Date(post.published_at), 'dd MMM yyyy')}</span>
                <span>•</span>
              </>
            )}
            {post.blog_categories && (
              <span className="text-red-600 font-medium">{post.blog_categories.name}</span>
            )}
          </div>

          <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-red-600 transition-colors line-clamp-2">
            {post.title}
          </h2>

          {post.excerpt && (
            <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
              {post.excerpt}
            </p>
          )}

          <div className="flex items-center text-red-600 font-semibold group-hover:gap-2 transition-all">
            <span>{readMoreText}</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}

// ISR: Revalidate every 60 seconds
export const revalidate = 60;
