import faker from 'faker';
import SubjectRepository from '../../src/repositories/SubjectRepository';

const subjectRepository = new SubjectRepository();

const fakeSubject = {
  name: faker.datatype.string(),
  period: faker.datatype.string(),
  quantity: 0
};

const createFakeSubject = async () => {
  const subject = subjectRepository.create(fakeSubject);
  await subjectRepository.save(subject);
};

export { createFakeSubject };
