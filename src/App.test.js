import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders navbar and footer', () => {
    render(<App />);
    
    // Check if navbar is present
    expect(screen.getByText('Kum Yew Loke')).toBeInTheDocument();
    
    // Check if footer is present
    expect(screen.getByText(/©/)).toBeInTheDocument();
  });

  test('renders main content', () => {
    render(<App />);
    
    // Check if main content is present
    expect(screen.getByText("Hello, I'm Loki")).toBeInTheDocument();
  });
});
