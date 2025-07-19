import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
  test('renders greeting message', () => {
    render(<Home />);
    
    const greeting = screen.getByRole('heading', { name: "Hello, I'm Loki" });
    expect(greeting).toBeInTheDocument();
  });

  test('renders description text', () => {
    render(<Home />);
    
    const description = screen.getByText(/A detail-oriented Web Developer/i);
    expect(description).toBeInTheDocument();
  });

  test('has correct section id', () => {
    const { container } = render(<Home />);
    
    const homeSection = container.querySelector('#home');
    expect(homeSection).toBeInTheDocument();
    expect(homeSection).toHaveAttribute('id', 'home');
  });

  test('has correct CSS class', () => {
    const { container } = render(<Home />);
    
    const homeSection = container.querySelector('#home');
    expect(homeSection).toHaveClass('home-section');
  });
}); 