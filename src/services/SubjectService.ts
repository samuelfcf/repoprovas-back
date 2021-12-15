import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import SubjectRepository from '../repositories/SubjectRepository';

class SubjectService {
  public find = async () => {
    const subjectRepository = getCustomRepository(SubjectRepository);
    const subjects = await subjectRepository.find({});

    if (subjects.length === 0)
      throw new AppError('No subjects in database', 404);

    return subjects;
  };
}

export default SubjectService;
