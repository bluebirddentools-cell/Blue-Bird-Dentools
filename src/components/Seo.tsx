import { useEffect } from 'react';

export const SITE_URL = 'https://blue-bird-dentools.vercel.app';

interface SeoProps {
  title: string;
  description: string;
  path: string;
}

// Updates the defaults shipped in index.html (kept there for non-JS crawlers and link previews)
// instead of adding duplicates, so each route gets its own title, description and canonical URL.
const upsert = (selector: string, create: () => HTMLElement, attr: string, value: string) => {
  let el = document.head.querySelector<HTMLElement>(selector);
  if (!el) {
    el = create();
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
};

const meta = (key: 'name' | 'property', name: string, content: string) =>
  upsert(`meta[${key}="${name}"]`, () => {
    const m = document.createElement('meta');
    m.setAttribute(key, name);
    return m;
  }, 'content', content);

const Seo = ({ title, description, path }: SeoProps) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    document.title = title;
    meta('name', 'description', description);
    meta('property', 'og:title', title);
    meta('property', 'og:description', description);
    meta('property', 'og:url', url);
    meta('name', 'twitter:title', title);
    meta('name', 'twitter:description', description);
    upsert('link[rel="canonical"]', () => {
      const l = document.createElement('link');
      l.rel = 'canonical';
      return l;
    }, 'href', url);
  }, [title, description, path]);

  return null;
};

export default Seo;
