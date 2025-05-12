// Uncomment the code below and write your tests
import axios from 'axios';
import { throttledGetDataFromApi } from './index';

describe('throttledGetDataFromApi', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  const relativePath = 'posts';

  jest.mock('axios');

  test('should create instance with provided base url', async () => {
    const createSpy = jest.spyOn(axios, 'create');

    jest.useFakeTimers();
    await throttledGetDataFromApi(relativePath);
    jest.runAllTimers();

    expect(createSpy).toHaveBeenCalledWith({
      baseURL: 'https://jsonplaceholder.typicode.com',
    });
  });

  test('should perform request to correct provided url', async () => {
    const mockedGet = jest.fn().mockResolvedValue({ data: [] });
    (axios.create as jest.Mock) = jest.fn(() => ({
      get: mockedGet,
    }));
    await throttledGetDataFromApi(relativePath);
    expect(mockedGet).toHaveBeenCalledWith(relativePath);
  });

  test('should return response data', async () => {
    const mockedData = { data: [] };
    const mockedGet = jest.fn().mockResolvedValue(mockedData);
    (axios.create as jest.Mock) = jest.fn(() => ({
      get: mockedGet,
    }));
    const response = await throttledGetDataFromApi(relativePath);
    expect(response).toEqual(mockedData.data);
  });
});
