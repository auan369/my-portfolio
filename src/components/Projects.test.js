import { render, screen } from '@testing-library/react';
import Projects from './Projects';

describe('Projects Component', () => {
  test('renders projects heading', () => {
    render(<Projects />);
    
    const heading = screen.getByRole('heading', { name: 'Projects' });
    expect(heading).toBeInTheDocument();
  });

  test('renders project titles', () => {
    render(<Projects />);
    
    // Check for some project titles using more specific queries
    const wordpressProject = screen.getByRole('heading', { name: /Inventory Management WordPress plugins/i });
    const rockPaperProject = screen.getByRole('heading', { name: /Multiplayer Rock Paper Scissors WebSocket Game/i });
    const petAppProject = screen.getByRole('heading', { name: /Tamagotchi-Inspired Pet App/i });
    
    expect(wordpressProject).toBeInTheDocument();
    expect(rockPaperProject).toBeInTheDocument();
    expect(petAppProject).toBeInTheDocument();
  });

  test('has correct section id', () => {
    const { container } = render(<Projects />);
    
    const projectsSection = container.querySelector('#projects');
    expect(projectsSection).toBeInTheDocument();
    expect(projectsSection).toHaveAttribute('id', 'projects');
  });

  test('has correct CSS class', () => {
    const { container } = render(<Projects />);
    
    const projectsSection = container.querySelector('#projects');
    expect(projectsSection).toHaveClass('projects-section');
  });
}); 