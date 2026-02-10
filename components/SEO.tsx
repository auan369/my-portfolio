import Head from 'next/head';
import { useRouter } from 'next/router';

export interface PageMetadata {
  title: string;
  description: string;
  ogImage?: string; 
  canonicalUrl?: string; 
}

// Set your new domain as the base
const BASE_URL = 'https://www.lokesoftware.com';

// --- Define your site-wide default metadata ---
const defaultMetadata: Partial<PageMetadata> = {
  description: 'Principal Software Consultant and AI Systems Architect specializing in stabilizing legacy web platforms, building offline-first mobile architectures, and engineering enterprise SaaS solutions.',
  ogImage: `${BASE_URL}/social-card.jpg`,
};

const SITE_NAME = 'Kum Yew Loke (Loki)';

interface SEOProps {
  metadata: PageMetadata;
}

const SEO: React.FC<SEOProps> = ({ metadata }) => {
  const router = useRouter();
  // Merge page-specific metadata with site-wide defaults
  const finalMeta = { ...defaultMetadata, ...metadata };

  // Format the title: "Page Title | Site Name" or just "Site Name" for the homepage
  const title = finalMeta.title === SITE_NAME ? SITE_NAME : `${finalMeta.title} | ${SITE_NAME}`;
  const canonical = finalMeta.canonicalUrl || `${BASE_URL}${router.asPath === '/' ? '' : router.asPath}`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={finalMeta.description} />
      <meta name="google-site-verification" content="bthvjFTrqTLTmcOgzA0XQ1HlcvAXYk7DxVT492iCZbs" />
      {/* <link rel="icon" href="/favicon.ico" /> */}
      <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* --- Open Graph / Facebook / Social Media --- */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={finalMeta.description} />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:image" content={finalMeta.ogImage} />
      
      {/* --- Twitter Card --- */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={finalMeta.description} />
      <meta name="twitter:image" content={finalMeta.ogImage} />

      {/* --- Optional: Canonical URL --- */}
      <link rel="canonical" href={canonical} />
    </Head>
  );
};

export default SEO;