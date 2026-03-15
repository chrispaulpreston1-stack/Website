import { Helmet } from 'react-helmet-async';

const BASE_URL = 'https://www.pfandco.co.uk';

interface BreadcrumbItem {
  name: string;
  path: string;
}

interface PageSEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  breadcrumbs?: BreadcrumbItem[];
}

function buildBreadcrumbLd(breadcrumbs: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.path}`,
    })),
  };
}

function autoBreadcrumbs(path: string, title: string): BreadcrumbItem[] {
  const segments = path.split('/').filter(Boolean);
  if (segments.length === 0) return [];

  const crumbs: BreadcrumbItem[] = [{ name: 'Home', path: '/' }];

  if (segments[0] === 'site-intelligence') {
    crumbs.push({ name: 'Site Intelligence', path: '/site-intelligence' });
    if (segments.length > 1) {
      crumbs.push({ name: title.split('|')[0].trim(), path });
    }
  } else if (segments[0] === 'insights') {
    crumbs.push({ name: 'Insights', path: '/blog' });
    crumbs.push({ name: title.split('|')[0].trim(), path });
  } else {
    crumbs.push({ name: title.split('|')[0].trim(), path });
  }

  return crumbs;
}

export default function PageSEO({
  title,
  description,
  path,
  ogImage = `${BASE_URL}/og-image.png`,
  ogType = 'website',
  jsonLd,
  breadcrumbs,
}: PageSEOProps) {
  const canonicalUrl = `${BASE_URL}${path}`;
  const resolvedBreadcrumbs = breadcrumbs || autoBreadcrumbs(path, title);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="PF & Co Construction" />
      <meta property="og:locale" content="en_GB" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {resolvedBreadcrumbs.length > 0 && (
        <script type="application/ld+json">
          {JSON.stringify(buildBreadcrumbLd(resolvedBreadcrumbs))}
        </script>
      )}
      {jsonLd && (Array.isArray(jsonLd) ? jsonLd : [jsonLd]).map((ld, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify({ '@context': 'https://schema.org', ...ld })}
        </script>
      ))}
    </Helmet>
  );
}
