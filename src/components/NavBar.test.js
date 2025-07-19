import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';

const renderWithRouter = (component) => {
  return render(
    <BrowserRouter>
      {component}
    </BrowserRouter>
  );
};

describe('NavBar Component', () => {
  test('renders brand logo and name', () => {
    renderWithRouter(<NavBar />);
    
    const brandName = screen.getByText('Kum Yew Loke');
    const profileImage = screen.getByAltText('Kum Yew Loke');
    
    expect(brandName).toBeInTheDocument();
    expect(profileImage).toBeInTheDocument();
  });

  test('renders all navigation links', () => {
    renderWithRouter(<NavBar />);
    
    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    const projectsLink = screen.getByRole('link', { name: /projects/i });
    const resumeLink = screen.getByRole('link', { name: /resume/i });
    const contactLink = screen.getByRole('link', { name: /contact/i });
    
    expect(homeLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
    expect(projectsLink).toBeInTheDocument();
    expect(resumeLink).toBeInTheDocument();
    expect(contactLink).toBeInTheDocument();
  });

  test('navigation links have correct href attributes', () => {
    renderWithRouter(<NavBar />);
    
    const homeLink = screen.getByRole('link', { name: /home/i });
    const aboutLink = screen.getByRole('link', { name: /about/i });
    const projectsLink = screen.getByRole('link', { name: /projects/i });
    const resumeLink = screen.getByRole('link', { name: /resume/i });
    const contactLink = screen.getByRole('link', { name: /contact/i });
    
    expect(homeLink).toHaveAttribute('href', '/');
    expect(aboutLink).toHaveAttribute('href', '/about');
    expect(projectsLink).toHaveAttribute('href', '/projects');
    expect(resumeLink).toHaveAttribute('href', '/resume');
    expect(contactLink).toHaveAttribute('href', '/contact');
  });

  test('renders navigation icons', () => {
    renderWithRouter(<NavBar />);
    
    const icons = screen.getAllByRole('img', { hidden: true });
    expect(icons.length).toBeGreaterThan(0);
  });
}); 