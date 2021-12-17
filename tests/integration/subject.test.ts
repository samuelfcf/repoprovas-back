import supertest from 'supertest';
import { getConnection } from 'typeorm';
import app, { init } from '../../src/app';
import { HttpStatusCode } from '../../src/utils/enums';
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
  afterAll(async () => {
    await deleteSubjects();
  });

  beforeAll(async () => {
    await deleteSubjects();
  });

  afterEach(async () => {
    await createFakeSubject();
  });

  test('Should returns 404 for no subjects.', async () => {
    const result = await supertest(app).get('/subjects');
    expect(result.status).toBe(HttpStatusCode.NOT_FOUND);
  });

  test('Shoul returns 200 for subjects', async () => {
    const result = await supertest(app).get('/subjects');
    expect(result.status).toBe(HttpStatusCode.SUCCESS);
    expect(result.body.data.length).toBeGreaterThan(0);
  });
});
