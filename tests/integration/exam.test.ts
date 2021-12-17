import supertest from 'supertest';
import { getConnection } from 'typeorm';
import app, { init } from '../../src/app';
import { HttpStatusCode } from '../../src/utils/enums';
import {
  invalidFakeExam,
  validFakeExam,
  deleteExams
} from '../factories/exam.factory';
import {
  createFakeProfessor,
  deleteProfessors
} from '../factories/professor.factory';
import { createFakeSubject } from '../factories/subject.factory';

beforeAll(async () => {
  await init();
});

afterAll(async () => {
  await deleteExams();
  await deleteProfessors();
  await deleteExams();
  await getConnection().close();
});

let fakeProfessor: { id: number }[];
let fakeSubject: { id: number }[];

describe('POST /exams', () => {
  test('Should returns 400 for invalid body', async () => {
    const result = await supertest(app).post('/exams').send({});
    expect(result.status).toBe(HttpStatusCode.BAD_REQUEST);
  });

  test('Should returns 404 for professor not found at database', async () => {
    const result = await supertest(app).post('/exams').send(invalidFakeExam);
    expect(result.status).toBe(HttpStatusCode.NOT_FOUND);
  });

  test('Should returns 404 for subject not found at database', async () => {
    const result = await supertest(app).post('/exams').send(invalidFakeExam);
    expect(result.status).toBe(HttpStatusCode.NOT_FOUND);
  });

  test('Should returns 201 for exam created successfully', async () => {
    fakeProfessor = await createFakeProfessor();
    fakeSubject = await createFakeSubject();

    const result = await supertest(app).post('/exams').send({
      name: validFakeExam.name,
      category: validFakeExam.category,
      url: validFakeExam.url,
      professorId: fakeProfessor[0].id,
      subjectId: fakeSubject[0].id
    });

    expect(result.status).toBe(HttpStatusCode.CREATED);
  });
});
