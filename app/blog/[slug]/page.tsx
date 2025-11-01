import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import { blogApi } from '@/lib/api/blog';
import { BlogPost } from '@/types/blog';
import { Metadata } from 'next';
import ShareButtons from '../components/ShareButtons';
import ViewTracker from '@/components/ViewTracker';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// Generate metadata for SEO
export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  try {
    const post = await blogApi.getPostBySlug(params.slug);

    return {
      title: `${post.title} - HotDeal Media`,
      description: post.excerpt || post.title,
      openGraph: {
        title: post.title,
        description: post.excerpt || post.title,
        images: post.featured_image_url ? [post.featured_image_url] : [],
        type: 'article',
        publishedTime: post.published_at,
      },
      twitter: {
        card: 'summary_large_image',
        title: post.title,
        description: post.excerpt || post.title,
        images: post.featured_image_url ? [post.featured_image_url] : [],
      },
    };
  } catch {
    return {
      title: 'Post Not Found - HotDeal Media',
    };
  }
}

// Generate static params for existing posts
export async function generateStaticParams() {
  try {
    const { data: posts } = await blogApi.getPosts({ limit: 1000 });

    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch {
    return [];
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const t = await getTranslations('blogDetail');

  let post: BlogPost;
  let relatedPosts: BlogPost[] = [];

  try {
    post = await blogApi.getPostBySlug(params.slug);

    // Fetch related posts from same category
    if (post.blog_categories?.id) {
      const { data } = await blogApi.getPosts({
        category_id: post.blog_categories.id,
        limit: 4,
      });
      relatedPosts = data.filter((p) => p.slug !== post.slug).slice(0, 3);
    }
  } catch {
    notFound();
  }

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: post.featured_image_url,
    datePublished: post.published_at,
    dateModified: post.updated_at || post.published_at,
    author: {
      '@type': 'Person',
      name: post.users.full_name,
    },
    publisher: {
      '@type': 'Organization',
      name: 'HotDeal Media',
      logo: {
        '@type': 'ImageObject',
        url: 'https://hotdealmedia.com/logo.png',
      },
    },
  };

  return (
    <>
      {/* JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Client-side view tracking (50% scroll depth) */}
      <ViewTracker slug={params.slug} />

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

        {/* Article Header */}
        <article className="relative pt-24 sm:pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm">
              <Link href="/" className="text-red-600 hover:underline">
                {t('breadcrumb.home')}
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <Link href="/blog" className="text-red-600 hover:underline">
                {t('breadcrumb.blog')}
              </Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-gray-600">{post.title}</span>
            </nav>

            {/* Category Badge */}
            {post.blog_categories && (
              <div className="mb-4">
                <Link
                  href={`/blog/category/${post.blog_categories.slug}`}
                  className="inline-block bg-red-50 text-red-600 px-4 py-2 rounded-full text-sm font-semibold hover:bg-red-600 hover:text-white transition-colors"
                >
                  {post.blog_categories.name}
                </Link>
              </div>
            )}

            {/* Title */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex items-center gap-4 text-gray-600 mb-8 pb-8 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" />
                </svg>
                <span>{post.users.full_name}</span>
              </div>

              {post.published_at && (
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <time dateTime={post.published_at}>
                    {format(new Date(post.published_at), 'dd MMM yyyy')}
                  </time>
                </div>
              )}

              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path
                    fillRule="evenodd"
                    d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{post.view_count} {t('meta.views')}</span>
              </div>
            </div>

            {/* Featured Image */}
            {post.featured_image_url && (
              <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
                <Image
                  src={post.featured_image_url}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 100vw, 896px"
                />
              </div>
            )}

            {/* Content */}
            <div
              className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-red-600 prose-img:rounded-lg prose-headings:font-bold prose-h2:text-2xl prose-h2:mt-8 prose-h2:mb-4 prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3 prose-p:mb-4 prose-p:leading-relaxed prose-ul:my-4 prose-ul:ml-6 prose-li:mb-2 prose-a:no-underline hover:prose-a:underline prose-blockquote:border-l-4 prose-blockquote:border-red-500 prose-blockquote:pl-4 prose-blockquote:italic prose-blockquote:text-gray-600 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-pre:bg-gray-900 prose-pre:text-white prose-pre:p-4 prose-pre:rounded-lg prose-pre:overflow-x-auto"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {t('share.title')}
              </h3>
              <ShareButtons title={post.title} />
            </div>

            {/* Back to Blog */}
            <div className="mt-8">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-red-600 font-semibold hover:gap-3 transition-all"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                <span>{t('backToBlog')}</span>
              </Link>
            </div>
          </div>
        </article>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="relative py-16 px-4 bg-gray-50">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {t('relatedPosts.title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link
                    key={relatedPost.id}
                    href={`/blog/${relatedPost.slug}`}
                    className="group"
                  >
                    <article className="h-full bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-red-600 hover:shadow-xl transition-all hover:-translate-y-2">
                      {relatedPost.featured_image_url ? (
                        <div className="relative h-40 bg-gray-200">
                          <Image
                            src={relatedPost.featured_image_url}
                            alt={relatedPost.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 33vw"
                          />
                        </div>
                      ) : (
                        <div className="relative h-40 bg-red-50">
                          <div className="absolute inset-0 bg-red-500/10"></div>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <svg
                              className="w-12 h-12 text-red-600/20"
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
                      <div className="p-6">
                        {relatedPost.blog_categories && (
                          <div className="text-sm text-red-600 font-medium mb-2">
                            {relatedPost.blog_categories.name}
                          </div>
                        )}
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2 line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        {relatedPost.excerpt && (
                          <p className="text-gray-600 text-sm line-clamp-2">
                            {relatedPost.excerpt}
                          </p>
                        )}
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </>
  );
}

// ISR: Revalidate every 60 seconds
export const revalidate = 60;
