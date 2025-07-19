import { useEffect } from 'react';
import PropTypes from 'prop-types';

const SEO = ({ title, description, keywords, image, url }) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update meta description
    updateMetaTag('description', description);

    // Update meta keywords
    if (keywords) {
      updateMetaTag('keywords', keywords.join(', '));
    }

    // Update Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:image', image, 'property');
    updateMetaTag('og:url', url, 'property');
    updateMetaTag('og:type', 'website', 'property');

    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image', 'name');
    updateMetaTag('twitter:title', title, 'name');
    updateMetaTag('twitter:description', description, 'name');
    updateMetaTag('twitter:image', image, 'name');
  }, [title, description, keywords, image, url]);

  const updateMetaTag = (name, content, attribute = 'name') => {
    if (!content) return;

    let element = document.querySelector(`meta[${attribute}="${name}"]`);
    
    if (!element) {
      element = document.createElement('meta');
      element.setAttribute(attribute, name);
      document.head.appendChild(element);
    }
    
    element.setAttribute('content', content);
  };

  return null; // This component doesn't render anything
};

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  url: PropTypes.string,
};

SEO.defaultProps = {
  keywords: [],
  image: '',
  url: '',
};

export default SEO; 