import supertest from 'supertest';
import { getConnection } from 'typeorm';
import app, { init } from '../../src/app';
import {
  createFakeProfessor,
  deleteProfessors
} from '../factories/professor.factory';

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await deleteProfessors();
  await getConnection().close();
});

describe('GET /professors', () => {
  afterEach(async () => {
    await createFakeProfessor();
  });

  test('Should returns 404 for no professors.', async () => {
    const result = await supertest(app).get('/professors');
    expect(result.status).toBe(404);
  });

  test('Shoul returns 200 for professors', async () => {
    const result = await supertest(app).get('/professors');
    expect(result.status).toBe(200);
    expect(result.body.data.length).toBeGreaterThan(0);
  });
});
