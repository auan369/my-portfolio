import React from 'react';
import { render } from '@testing-library/react';
import SEO from './SEO';

describe('SEO Component', () => {
  beforeEach(() => {
    // Clear any existing meta tags
    document.title = '';
    const metaTags = document.querySelectorAll('meta');
    metaTags.forEach(tag => tag.remove());
  });

  test('updates document title', () => {
    const testTitle = 'Test Page Title';
    
    render(
      <SEO 
        title={testTitle}
        description="Test description"
      />
    );
    
    expect(document.title).toBe(testTitle);
  });

  test('creates meta description tag', () => {
    const testDescription = 'Test page description';
    
    render(
      <SEO 
        title="Test Title"
        description={testDescription}
      />
    );
    
    const metaDescription = document.querySelector('meta[name="description"]');
    expect(metaDescription).toBeTruthy();
    expect(metaDescription.getAttribute('content')).toBe(testDescription);
  });

  test('creates meta keywords tag when provided', () => {
    const testKeywords = ['react', 'javascript', 'portfolio'];
    
    render(
      <SEO 
        title="Test Title"
        description="Test description"
        keywords={testKeywords}
      />
    );
    
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    expect(metaKeywords).toBeTruthy();
    expect(metaKeywords.getAttribute('content')).toBe(testKeywords.join(', '));
  });

  test('creates Open Graph meta tags', () => {
    const testTitle = 'Test Title';
    const testDescription = 'Test description';
    const testImage = 'test-image.jpg';
    const testUrl = 'https://example.com';
    
    render(
      <SEO 
        title={testTitle}
        description={testDescription}
        image={testImage}
        url={testUrl}
      />
    );
    
    expect(document.querySelector('meta[property="og:title"]').getAttribute('content')).toBe(testTitle);
    expect(document.querySelector('meta[property="og:description"]').getAttribute('content')).toBe(testDescription);
    expect(document.querySelector('meta[property="og:image"]').getAttribute('content')).toBe(testImage);
    expect(document.querySelector('meta[property="og:url"]').getAttribute('content')).toBe(testUrl);
    expect(document.querySelector('meta[property="og:type"]').getAttribute('content')).toBe('website');
  });

  test('creates Twitter Card meta tags', () => {
    const testTitle = 'Test Title';
    const testDescription = 'Test description';
    const testImage = 'test-image.jpg';
    
    render(
      <SEO 
        title={testTitle}
        description={testDescription}
        image={testImage}
      />
    );
    
    expect(document.querySelector('meta[name="twitter:card"]').getAttribute('content')).toBe('summary_large_image');
    expect(document.querySelector('meta[name="twitter:title"]').getAttribute('content')).toBe(testTitle);
    expect(document.querySelector('meta[name="twitter:description"]').getAttribute('content')).toBe(testDescription);
    expect(document.querySelector('meta[name="twitter:image"]').getAttribute('content')).toBe(testImage);
  });

  test('does not render any visible content', () => {
    const { container } = render(
      <SEO 
        title="Test Title"
        description="Test description"
      />
    );
    
    expect(container.firstChild).toBe(null);
  });
}); 