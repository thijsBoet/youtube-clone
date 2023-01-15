import { render, screen } from '@testing-library/react';
import App from './App';

it('should display a logo', () => {
  render(<App />);
  const logo = screen.getByAltText('logo');
  expect(logo).toBeInTheDocument();
});
