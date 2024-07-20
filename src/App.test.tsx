import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header and main component', () => {
  render(<App />);

  // проверяем, что Header компонент отображается
  const headerElement = screen.getByRole('banner');
  expect(headerElement).toBeInTheDocument();

  // проверяем, что Main компонент отображается
  const mainElement = screen.getByRole('main');
  expect(mainElement).toBeInTheDocument();
});
