import supertest from 'supertest';
import { getConnection } from 'typeorm';
import app, { init } from '../../src/app';
import {
  createFakeSubject,
  deleteSubjects
} from '../factories/subject.factory';

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await deleteSubjects();
  await getConnection().close();
});

describe('GET /subjects', () => {
  afterEach(async () => {
    await createFakeSubject();
  });

  test('Should returns 404 for no subjects.', async () => {
    const result = await supertest(app).get('/subjects');
    expect(result.status).toBe(404);
  });

  test('Shoul returns 200 for subjects', async () => {
    const result = await supertest(app).get('/subjects');
    expect(result.status).toBe(200);
    expect(result.body.data.length).toBeGreaterThan(0);
  });
});
