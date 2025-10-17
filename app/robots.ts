import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://hotdealmedia.com/sitemap.xml', // Thay đổi theo domain thực tế
  };
}
