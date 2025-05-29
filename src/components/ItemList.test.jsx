import { render, screen } from '@testing-library/react';
import ItemList from './ItemList';

test('renders the ItemList component', () => {
  render(<ItemList />);
  const list = screen.getByRole('list');
  expect(list).toBeInTheDocument();
});

test('contains Banana in the list', () => {
  render(<ItemList />);
  // Task #3: check if specific list item is present
  const banana = screen.getByTestId('item-banana');
  expect(banana).toBeInTheDocument();
  expect(banana).toHaveTextContent('Banana');
});