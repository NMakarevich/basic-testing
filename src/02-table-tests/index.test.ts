// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 4, b: 2, action: Action.Subtract, expected: 2 },
  { a: 5, b: 2, action: Action.Subtract, expected: 3 },
  { a: 2, b: 4, action: Action.Subtract, expected: -2 },
  { a: 3, b: 2, action: Action.Multiply, expected: 6 },
  { a: 4, b: 3, action: Action.Multiply, expected: 12 },
  { a: 10, b: 0, action: Action.Multiply, expected: 0 },
  { a: 11, b: 2, action: Action.Divide, expected: 5.5 },
  { a: 6, b: 3, action: Action.Divide, expected: 2 },
  { a: 4, b: 3, action: Action.Divide, expected: 4 / 3 },
  { a: 4, b: 3, action: Action.Exponentiate, expected: 64 },
  { a: 3, b: 3, action: Action.Exponentiate, expected: 27 },
  { a: 2, b: 10, action: Action.Exponentiate, expected: 1024 },
  { a: 2, b: 10, action: 'test', expected: null },
  { a: '2', b: 2, action: Action.Exponentiate, expected: null },
  { a: 2, b: '2', action: Action.Exponentiate, expected: null },
  { a: '2', b: '2', action: Action.Exponentiate, expected: null },
];

describe('simpleCalculator', () => {
  test.each(testCases)(
    `Should return expected value`,
    ({ a, b, action, expected }) => {
      expect(simpleCalculator({ a, b, action })).toEqual(expected);
    },
  );
});
