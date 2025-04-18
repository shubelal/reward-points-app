import { render, screen } from '@testing-library/react';
import App from './App';

test('Loading', () => {
  render(<App />);
  const linkElement = screen.getByText(/Loading/i);
  expect(linkElement).toBeInTheDocument();
});
