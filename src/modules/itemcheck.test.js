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
    {
      ame: 'Person of Interest',
      type: 'Scripted',
      language: 'English',
    },
    {
      name: 'Bitten',
      type: 'Scripted',
      language: 'English',
    },
  ];

  const count = itemsCounter(data, link);

  test('Number of items are 3', () => {
    expect(count).toBe(3);
  });
});
