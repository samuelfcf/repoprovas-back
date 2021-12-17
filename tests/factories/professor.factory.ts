import faker from 'faker';
import { getManager } from 'typeorm';
import { createFakeSubject } from './subject.factory';

const fakeProfessor = {
  name: faker.datatype.string()
};

const createFakeProfessor = async () => {
  const fakeSubjectDB = await createFakeSubject();

  await getManager().query(
    'INSERT INTO professors (name, subject_id) VALUES ($1, $2);',
    [fakeProfessor.name, fakeSubjectDB[0].id]
  );
};

const deleteProfessors = async () => {
  await getManager().query('DELETE FROM professors;');
};

export { createFakeProfessor, deleteProfessors };
