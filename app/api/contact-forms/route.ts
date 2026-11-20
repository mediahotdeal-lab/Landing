import { NextRequest, NextResponse } from 'next/server';

/**
 * Same-origin proxy for contact form submissions.
 *
 * The browser posts here and the request is forwarded server-side to the CRM API. Calling the CRM
 * straight from the browser fails in production: the CRM is served over plain HTTP (blocked as mixed
 * content on the HTTPS site) and its CORS allowlist does not include the landing domain.
 */
const CRM_API_URL = (process.env.CRM_API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001').replace(
  /\/+$/,
  ''
);

export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  const body = await request.text();

  const headers: Record<string, string> = { 'Content-Type': 'application/json' };
  const forwardedFor = request.headers.get('x-forwarded-for');
  const userAgent = request.headers.get('user-agent');
  if (forwardedFor) headers['X-Forwarded-For'] = forwardedFor;
  if (userAgent) headers['User-Agent'] = userAgent;

  let upstream: Response;
  try {
    upstream = await fetch(`${CRM_API_URL}/api/contact-forms`, {
      method: 'POST',
      headers,
      body,
      cache: 'no-store',
      signal: AbortSignal.timeout(15000),
    });
  } catch (error) {
    console.error('Contact form proxy: CRM unreachable', error);
    return NextResponse.json(
      { statusCode: 502, message: 'Không thể kết nối đến hệ thống. Vui lòng thử lại sau.', error: 'Bad Gateway' },
      { status: 502 }
    );
  }

  // Always answer with JSON so the client can read the error message
  const text = await upstream.text();
  try {
    return NextResponse.json(JSON.parse(text), { status: upstream.status });
  } catch {
    console.error('Contact form proxy: non-JSON response from CRM', upstream.status, text.slice(0, 200));
    return NextResponse.json(
      { statusCode: upstream.status, message: 'Có lỗi xảy ra. Vui lòng thử lại.', error: upstream.statusText },
      { status: upstream.ok ? 502 : upstream.status }
    );
  }
}
