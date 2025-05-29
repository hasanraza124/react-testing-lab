import React from 'react';

export default function ItemList() {
  const items = ['Apple', 'Banana', 'Cherry'];
  return (
    <ul>
      {items.map(item => (
        <li key={item} data-testid={`item-${item.toLowerCase()}`}>{item}</li>
      ))}
    </ul>
  );
}