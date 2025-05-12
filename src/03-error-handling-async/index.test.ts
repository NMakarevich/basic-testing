// Uncomment the code below and write your tests
import {
  throwError,
  throwCustomError,
  resolveValue,
  MyAwesomeError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    const value = 'test value';
    const result = await resolveValue(value);
    expect(result).toEqual(value);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    const message = 'Error message';
    try {
      throwError(message);
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toEqual(message);
      }
    }
  });

  test('should throw error with default message if message is not provided', () => {
    try {
      throwError();
    } catch (error) {
      if (error instanceof Error) {
        expect(error.message).toEqual('Oops!');
      }
    }
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    try {
      throwCustomError();
    } catch (error) {
      expect(error instanceof MyAwesomeError).toEqual(true);
      expect((error as MyAwesomeError).message).toEqual(
        'This is my awesome custom error!',
      );
    }
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    await rejectCustomError().catch((error) => {
      if (error instanceof MyAwesomeError) {
        expect(error.message).toEqual('This is my awesome custom error!');
      }
    });
  });
});
