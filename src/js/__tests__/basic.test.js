import sorting from '../basic';

test('should sort desc', () => {
  const arr = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
  ];

  const result = sorting(arr);

  const rez = [
    { name: 'маг', health: 100 },
    { name: 'мечник', health: 10 },
  ];

  expect(result).toEqual(rez);
});

test('should sort same', () => {
  const arr = [
    { name: 'маг', health: 10 },
    { name: 'мечник', health: 10 },
  ];

  const result = sorting(arr);

  const rez = [
    { name: 'маг', health: 10 },
    { name: 'мечник', health: 10 },
  ];

  expect(result).toEqual(rez);
});

test('should sort desc2', () => {
  const arr = [
    { name: 'маг', health: 100 },
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 80 },
  ];

  const result = sorting(arr);

  const rez = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ];

  expect(result).toEqual(rez);
});
