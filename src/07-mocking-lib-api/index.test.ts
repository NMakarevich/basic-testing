// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';

describe('throttledGetDataFromApi', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const relativePath = 'posts';

  test('should create instance with provided base url', async () => {
    const createSpy = jest.spyOn(axios, 'create');
    jest.mock('axios', () => ({
      get: jest.fn(),
    }));
    await throttledGetDataFromApi(relativePath);

    expect(createSpy).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    // Write your test here
  });

  test('should return response data', async () => {
    // Write your test here
  });
});
