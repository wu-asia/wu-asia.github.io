import type { APIRoute } from 'astro';
import { site } from '../config/site';

export const prerender = true;

export const GET: APIRoute = () => {
  const sitemapUrl = new URL('/sitemap-index.xml', site.url).toString();

  return new Response(
    `User-agent: *\nAllow: /\n\nSitemap: ${sitemapUrl}\n`,
    { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
  );
};
