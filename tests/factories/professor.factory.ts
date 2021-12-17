import faker from 'faker';
import { getManager } from 'typeorm';
import { createFakeSubject } from './subject.factory';

const fakeProfessor = {
  name: faker.datatype.string()
};

const createFakeProfessor = async () => {
  const fakeSubjectDB = await createFakeSubject();

  const professor = await getManager().query(
    'INSERT INTO professors (name, subject_id) VALUES ($1, $2) RETURNING *;',
    [fakeProfessor.name, fakeSubjectDB[0].id]
  );

  return professor;
};

const deleteProfessors = async () => {
  await getManager().query('DELETE FROM professors;');
};

export { createFakeProfessor, deleteProfessors };
