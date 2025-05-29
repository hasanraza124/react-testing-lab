import { render, screen } from '@testing-library/react';
import HelloWorld from './HelloWorld';

test('renders the HelloWorld component', () => {
  render(<HelloWorld />);
  // Task #1: check if component mounted (by role/heading)
  const heading = screen.getByRole('heading');
  expect(heading).toBeInTheDocument();
});

test('displays the correct text', () => {
  render(<HelloWorld />);
  // Task #2: check text using toHaveTextContent
  const heading = screen.getByTestId('hello-heading');
  expect(heading).toHaveTextContent('Hello world');
});