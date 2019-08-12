const request = require('supertest');
const app = require('./app');

const mockData = [
  {
    id: 2,
    name: 'foo',
    role: 'bar',
  },
];

// jest.mock('./data')

const mockGetEntitiesStub = jest.fn(() => mockData)
jest.mock('./data', () => ({
  getEntities: () => mockGetEntitiesStub(),
}));

describe('application root route', () => {
  test('should response send status code 200 with OK text', async () => {
    const response = await request(app).get('/');

    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('OK');
  });
})

describe('application entity route', () => {
  test('should response send status code 200 with result', async () => {
    const response = await request(app).get('/entity/2');
    const content = JSON.parse(response.text);

    expect(response.statusCode).toBe(200);
    expect(content).toEqual(mockData[0]);
    expect(mockGetEntitiesStub).toHaveBeenCalled();
  });

  test('should response send status code 500 with Record not found Error', async () => {
    const response = await request(app).get('/entity/4');

    expect(response.statusCode).toBe(500);
    expect(response.text).toContain('Record not found');
    expect(mockGetEntitiesStub).toHaveBeenCalled();
  });
})