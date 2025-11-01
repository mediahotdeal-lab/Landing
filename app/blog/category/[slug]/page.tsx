import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { blogApi } from '@/lib/api/blog';
import { BlogPost, BlogCategory } from '@/types/blog';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import NewsletterSection from '../../components/NewsletterSection';

interface CategoryPageProps {
  params: {
    slug: string;
  };
  searchParams: {
    page?: string;
  };
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  try {
    const categories = await blogApi.getCategories();
    const category = categories.find((cat) => cat.slug === params.slug);

    if (!category) {
      return {
        title: 'Category Not Found - HotDeal Media',
      };
    }

    return {
      title: `${category.name} - Blog - HotDeal Media`,
      description: category.description || `Xem tất cả bài viết về ${category.name}`,
    };
  } catch {
    return {
      title: 'Category - HotDeal Media',
    };
  }
}

// Generate static params for existing categories
export async function generateStaticParams() {
  try {
    const categories = await blogApi.getCategories();

    return categories.map((category) => ({
      slug: category.slug,
    }));
  } catch {
    return [];
  }
}

export default async function CategoryPage({ params, searchParams }: CategoryPageProps) {
  const t = await getTranslations('blogPage');
  const tCategory = await getTranslations('categoryPage');

  const page = parseInt(searchParams.page || '1', 10);

  let category: BlogCategory | undefined;
  let posts: BlogPost[] = [];
  let totalPages = 1;
  let error = false;

  try {
    // Fetch all categories to find the current one
    const categories = await blogApi.getCategories();
    category = categories.find((cat) => cat.slug === params.slug);

    if (!category) {
      notFound();
    }

    // Fetch posts for this category
    const response = await blogApi.getPosts({
      category_id: category.id,
      page,
      limit: 12,
    });

    posts = response.data;
    totalPages = response.pagination.totalPages;
  } catch (err) {
    console.error('Failed to fetch category posts:', err);
    error = true;
  }

  if (!category) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      ></div>

      {/* Hero Section */}
      <section className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 px-4">
        <div className="container mx-auto max-w-[1400px]">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm">
            <Link href="/" className="text-red-600 hover:underline">
              {tCategory('breadcrumb.home')}
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <Link href="/blog" className="text-red-600 hover:underline">
              {tCategory('breadcrumb.blog')}
            </Link>
            <span className="mx-2 text-gray-400">/</span>
            <span className="text-gray-900">{category.name}</span>
          </nav>

          {/* Category Header */}
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <span className="bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold">
                {category.name}
              </span>
            </div>
            {category.description && (
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {category.description}
              </p>
            )}
            <p className="text-sm text-gray-500 mt-4">
              {posts.length > 0 && `${posts.length} ${tCategory('postsCount')}`}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="relative py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-[1400px]">
          {error ? (
            <div className="text-center py-12">
              <p className="text-red-600 mb-4">
                {tCategory('error.loadFailed')}
              </p>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">{tCategory('empty.noPosts')}</p>
              <Link
                href="/blog"
                className="inline-block mt-4 text-red-600 hover:text-red-700 font-semibold"
              >
                {tCategory('empty.backToAll')}
              </Link>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {posts.map((post) => (
                  <BlogPostCard key={post.id} post={post} readMoreText={t('post.readMore')} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-12">
                  {page > 1 && (
                    <Link
                      href={`/blog/category/${params.slug}?page=${page - 1}`}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {tCategory('pagination.previous')}
                    </Link>
                  )}

                  <span className="px-4 py-2 text-gray-600">
                    {tCategory('pagination.pageOf', { current: page.toString(), total: totalPages.toString() })}
                  </span>

                  {page < totalPages && (
                    <Link
                      href={`/blog/category/${params.slug}?page=${page + 1}`}
                      className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      {tCategory('pagination.next')}
                    </Link>
                  )}
                </div>
              )}
            </>
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
              <svg
                className="w-16 h-16 text-red-600/20"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.5}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
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
                {post.blog_categories && <span>•</span>}
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
            <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>
          )}

          <div className="flex items-center text-red-600 font-semibold group-hover:gap-2 transition-all">
            <span>{readMoreText}</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}

// ISR: Revalidate every 60 seconds
export const revalidate = 60;
