// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const result = simpleCalculator({ a: 2, b: 3, action: Action.Add });
    expect(result).toEqual(2 + 3);
  });

  test('should subtract two numbers', () => {
    const result = simpleCalculator({ a: 10, b: 2, action: Action.Subtract });
    expect(result).toEqual(10 - 2);
  });

  test('should multiply two numbers', () => {
    const result = simpleCalculator({ a: 4, b: 3, action: Action.Multiply });
    expect(result).toEqual(4 * 3);
  });

  test('should divide two numbers', () => {
    const result = simpleCalculator({ a: 7, b: 3, action: Action.Divide });
    expect(result).toEqual(7 / 3);
  });

  test('should exponentiate two numbers', () => {
    const result = simpleCalculator({
      a: 3,
      b: 4,
      action: Action.Exponentiate,
    });
    expect(result).toEqual(Math.pow(3, 4));
  });

  test('should return null for invalid action', () => {
    const result = simpleCalculator({ a: 3, b: 4, action: 'Test' });
    expect(result).toEqual(null);
  });

  test('should return null for invalid arguments', () => {
    const result = simpleCalculator({ a: '4', b: 3, action: Action.Add });
    expect(result).toEqual(null);
  });
});
