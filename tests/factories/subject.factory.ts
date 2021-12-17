import faker from 'faker';
import { getManager } from 'typeorm';
import SubjectRepository from '../../src/repositories/SubjectRepository';

const subjectRepository = new SubjectRepository();

const fakeSubject = {
  name: faker.datatype.string(),
  period: faker.datatype.string(),
  exams_quantity: 0
};

const createFakeSubject = async () => {
  const subject = await getManager().query(
    `INSERT INTO subjects (name, period, exams_quantity)VALUES ($1, $2, $3);`,
    [fakeSubject.name, fakeSubject.period, fakeSubject.exams_quantity]
  );
};

const deleteSubjects = async () => {
  await getManager().query('DELETE FROM subjects');
};

export { createFakeSubject, deleteSubjects };
