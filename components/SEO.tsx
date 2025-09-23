import Head from 'next/head';

export interface PageMetadata {
  title: string;
  description: string;
  // For social media sharing (Open Graph)
  ogImage?: string; 
  // You can add more specific tags if needed
  canonicalUrl?: string; 
}

// --- Define your site-wide default metadata ---
const defaultMetadata: Partial<PageMetadata> = {
  description: 'A detail-oriented Full-Stack Developer dedicated to building and managing impactful websites and web applications.',
  ogImage: 'https://kyloke-portfolio.vercel.app/social-card.jpg',
};

const SITE_NAME = 'Kum Yew Loke (Loki)';

interface SEOProps {
  metadata: PageMetadata;
}

const SEO: React.FC<SEOProps> = ({ metadata }) => {
  // Merge page-specific metadata with site-wide defaults
  const finalMeta = { ...defaultMetadata, ...metadata };

  // Format the title: "Page Title | Site Name" or just "Site Name" for the homepage
  const title = finalMeta.title === SITE_NAME ? SITE_NAME : `${finalMeta.title} | ${SITE_NAME}`;

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
      {finalMeta.canonicalUrl && <link rel="canonical" href={finalMeta.canonicalUrl} />}
    </Head>
  );
};

export default SEO;