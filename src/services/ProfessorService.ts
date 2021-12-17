import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import ProfessorRepository from '../repositories/ProfessorRepository';
import { IProfessorEntity } from '../types/Professor';
import { HttpStatusCode } from '../utils/enums';
class ProfessorService {
  public find = async (): Promise<IProfessorEntity[]> => {
    const professorRepository = getCustomRepository(ProfessorRepository);

    const professors = await professorRepository.find({
      relations: ['subject', 'exams']
    });

    if (professors.length === 0)
      throw new AppError('No professors in database', HttpStatusCode.NOT_FOUND);

    console.log(professors[0].getExams());
    return professors;
  };
}

export default ProfessorService;
