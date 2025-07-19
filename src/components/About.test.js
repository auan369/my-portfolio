import { render, screen } from '@testing-library/react';
import About from './About';

describe('About Component', () => {
  test('renders About Me heading', () => {
    render(<About />);
    
    const heading = screen.getByRole('heading', { name: 'About Me' });
    expect(heading).toBeInTheDocument();
  });

  test('renders background section', () => {
    render(<About />);
    
    const backgroundHeading = screen.getByRole('heading', { name: 'Background' });
    expect(backgroundHeading).toBeInTheDocument();
    
    const description = screen.getByText(/Hello, I'm Loki/);
    expect(description).toBeInTheDocument();
  });

  test('renders technical skills section', () => {
    render(<About />);
    
    const skillsHeading = screen.getByRole('heading', { name: 'Technical Skills' });
    expect(skillsHeading).toBeInTheDocument();
    
    // Check for some key skills
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('Node.js')).toBeInTheDocument();
    expect(screen.getByText('MongoDB')).toBeInTheDocument();
  });

  test('renders education section', () => {
    render(<About />);
    
    const educationHeading = screen.getByRole('heading', { name: 'Education' });
    expect(educationHeading).toBeInTheDocument();
    
    const degree = screen.getByText(/Bachelor of Engineering/);
    expect(degree).toBeInTheDocument();
    
    const university = screen.getByText(/Nanyang Technological University/);
    expect(university).toBeInTheDocument();
  });

  test('renders skill categories', () => {
    render(<About />);
    
    expect(screen.getByText('Languages')).toBeInTheDocument();
    expect(screen.getByText('Frontend')).toBeInTheDocument();
    expect(screen.getByText('Backend')).toBeInTheDocument();
    expect(screen.getByText('Databases')).toBeInTheDocument();
    expect(screen.getByText('Tools & Technologies')).toBeInTheDocument();
  });

  test('has correct section id', () => {
    const { container } = render(<About />);
    
    const aboutSection = container.querySelector('#about');
    expect(aboutSection).toBeInTheDocument();
    expect(aboutSection).toHaveAttribute('id', 'about');
  });
}); 