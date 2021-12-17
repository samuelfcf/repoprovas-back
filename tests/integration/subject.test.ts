import supertest from 'supertest';
import { getConnection } from 'typeorm';
import app, { init } from '../../src/app';
import { createFakeSubject } from '../factories/subject.factory';

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await getConnection().close();
});

describe('GET /subjects', () => {
  afterEach(async () => {
    await createFakeSubject();
  });

  test('Shoul returns 404 for no subjects.', async () => {
    const result = await supertest(app).get('/subjects');
    expect(result.status).toBe(404);
  });
});
