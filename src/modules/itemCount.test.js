/**
 * @jest-environment jsdom
 * */

import itemsCounter from './itemCounter.js';

describe('Testing items counter', () => {
  const link = document.createElement('p');
  const data = [
    {
      name: 'Under the Dome',
      type: 'Scripted',
      language: 'English',
    },
  ];

  const count = itemsCounter(data, link);

  test('Number of items are 1', () => {
    expect(count).toBe(1);
  });
});