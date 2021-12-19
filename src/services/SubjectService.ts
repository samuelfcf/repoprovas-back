import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import SubjectRepository from '../repositories/SubjectRepository';
import { ISubjectEntity } from '../types/Subject';
import { HttpStatusCode } from '../utils/enums';

class SubjectService {
  public find = async (): Promise<ISubjectEntity[]> => {
    const subjectRepository = getCustomRepository(SubjectRepository);
    const subjects = await subjectRepository.find({
      relations: ['exams']
    });

    if (subjects.length === 0)
      throw new AppError('No subjects in database', HttpStatusCode.NOT_FOUND);

    return subjects;
  };
}

export default SubjectService;
