import faker from 'faker';
import { getManager } from 'typeorm';
import { createFakeProfessor } from './professor.factory';
import { createFakeSubject } from './subject.factory';

const invalidFakeExam = {
  name: faker.datatype.string(),
  category: 'P1',
  url: faker.datatype.string(),
  professorId: faker.datatype.number(),
  subjectId: faker.datatype.number()
};

const validFakeExam = {
  name: faker.datatype.string(),
  category: 'P1',
  url: faker.datatype.string()
};

const createFakeExam = async () => {
  const fakeSubjectDB = await createFakeSubject();
  const fakeProfessorDB = await createFakeProfessor();

  const exam = await getManager().query(
    'INSERT INTO exams (name, category, professor_id, subject_id) VALUES ($1, $2, $3, $4, $5) RETUNING *;',
    [
      invalidFakeExam.name,
      invalidFakeExam.category,
      invalidFakeExam.url,
      fakeSubjectDB[0].id,
      fakeProfessorDB[0].id
    ]
  );

  return exam;
};

const deleteExams = async () => {
  await getManager().query('DELETE FROM exams;');
};

export { createFakeExam, deleteExams, invalidFakeExam, validFakeExam };
