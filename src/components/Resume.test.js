import { render, screen } from '@testing-library/react';
import Resume from './Resume';

describe('Resume Component', () => {
  test('renders resume heading', () => {
    render(<Resume />);
    
    const heading = screen.getByRole('heading', { name: 'Resume' });
    expect(heading).toBeInTheDocument();
  });

  test('renders resume image', () => {
    render(<Resume />);
    
    const resumeImage = screen.getByRole('img', { name: 'Kum Yew Resume' });
    expect(resumeImage).toBeInTheDocument();
  });

  test('renders download PDF link', () => {
    render(<Resume />);
    
    const downloadLink = screen.getByRole('link', { name: /download pdf/i });
    expect(downloadLink).toBeInTheDocument();
    expect(downloadLink).toHaveAttribute('href', '/KumYewResume.pdf');
    expect(downloadLink).toHaveAttribute('download', 'KumYewResume.pdf');
    expect(downloadLink).toHaveAttribute('target', '_blank');
  });

  test('has correct section id', () => {
    const { container } = render(<Resume />);
    
    const resumeSection = container.querySelector('#resume');
    expect(resumeSection).toBeInTheDocument();
    expect(resumeSection).toHaveAttribute('id', 'resume');
  });

  test('has correct CSS class', () => {
    const { container } = render(<Resume />);
    
    const resumeSection = container.querySelector('#resume');
    expect(resumeSection).toHaveClass('resume-section');
  });
}); 