const {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} = require('../index');
test('capitalize', () => {
  expect(capitalize('ewa')).toBe('EWA');
});

test('capitalize', () => {
  expect(capitalize('Padaka')).toBe('PADAKA');
});

test('capitalize', () => {
  expect(capitalize('MUR')).toBe('MUR');
});

test('reverse', () => {
  expect(reverseString('MUR')).toBe('RUM');
});

test('reverse', () => {
  expect(reverseString('kajak')).toBe('kajak');
});

test('reverse', () => {
  expect(reverseString('Olcia')).toBe('aiclO');
});

test('add', () => {
  expect(calculator.add(2, 4, 1)).toBe(7);
});
test('add', () => {
  expect(calculator.add(0, -1)).toBe(-1);
});
test('subtract', () => {
  expect(calculator.subtract(1, 3)).toBe(-2);
});

test('subtract', () => {
  expect(calculator.subtract(15, 15)).toBe(0);
});
test('divide', () => {
  expect(calculator.divide(3, 3)).toBe(1);
});
test('divide', () => {
  expect(calculator.divide(1024, 2)).toBe(512);
});
test('multiply', () => {
  expect(calculator.multiply(1, 5, 2, 6, 7, 0)).toBe(0);
});
test('multiply', () => {
  expect(calculator.multiply(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)).toBe(3628800);
});

test('caesar', () => {
  expect(caesarCipher('attack at dawn', 5)).toBe('fyyfhp fy ifbs');
});

test('caesar', () => {
  expect(caesarCipher('attack at dawn', 3)).toBe('dwwdfn dw gdzq');
});

test('analyze', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});

test('analyze', () => {
  expect(analyzeArray([])).toStrictEqual({
    average: null,
    min: null,
    max: null,
    length: 0,
  });
});

test('analyze', () => {
  expect(analyzeArray([1, 1, 1, 1])).toStrictEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 4,
  });
});
