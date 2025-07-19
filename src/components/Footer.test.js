import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  test('renders footer content', () => {
    render(<Footer />);
    
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
  });

  test('renders copyright text', () => {
    render(<Footer />);
    
    const copyrightText = screen.getByText(/©/);
    expect(copyrightText).toBeInTheDocument();
  });
}); 