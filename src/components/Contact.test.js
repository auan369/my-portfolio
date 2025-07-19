import { render, screen } from '@testing-library/react';
import Contact from './Contact';

describe('Contact Component', () => {
  test('renders contact heading', () => {
    render(<Contact />);
    
    const heading = screen.getByRole('heading', { name: 'Contact' });
    expect(heading).toBeInTheDocument();
  });

  test('renders contact description', () => {
    render(<Contact />);
    
    const description = screen.getByText(/Feel free to connect with me/i);
    expect(description).toBeInTheDocument();
  });

  test('renders all social media links', () => {
    render(<Contact />);
    
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(4);
  });

  test('renders GitHub link with correct href', () => {
    render(<Contact />);
    
    const links = screen.getAllByRole('link');
    const githubLink = links.find(link => 
      link.getAttribute('href') === 'https://github.com/auan369/'
    );
    
    expect(githubLink).toBeTruthy();
    expect(githubLink).toHaveAttribute('target', '_blank');
    expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer');
  });

  test('renders LinkedIn link with correct href', () => {
    render(<Contact />);
    
    const links = screen.getAllByRole('link');
    const linkedinLink = links.find(link => 
      link.getAttribute('href') === 'https://www.linkedin.com/in/kum-yew-loke-74a0b0205/'
    );
    
    expect(linkedinLink).toBeTruthy();
    expect(linkedinLink).toHaveAttribute('target', '_blank');
  });

  test('renders Instagram link with correct href', () => {
    render(<Contact />);
    
    const links = screen.getAllByRole('link');
    const instagramLink = links.find(link => 
      link.getAttribute('href') === 'https://www.instagram.com/lokey_ky/'
    );
    
    expect(instagramLink).toBeTruthy();
    expect(instagramLink).toHaveAttribute('target', '_blank');
  });

  test('renders email link with correct href', () => {
    render(<Contact />);
    
    const links = screen.getAllByRole('link');
    const emailLink = links.find(link => 
      link.getAttribute('href') === 'mailto:lokekumyew@gmail.com'
    );
    
    expect(emailLink).toBeTruthy();
    expect(emailLink).toHaveAttribute('target', '_blank');
  });

  test('has correct section id', () => {
    const { container } = render(<Contact />);
    
    const contactSection = container.querySelector('#contact');
    expect(contactSection).toBeInTheDocument();
    expect(contactSection).toHaveAttribute('id', 'contact');
  });
}); 