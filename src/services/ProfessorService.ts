import { getCustomRepository } from 'typeorm';
import ProfessorRepository from '../repositories/ProfessorRepository';
import { IProfessorEntity } from '../types/Professor';
class ProfessorService {
  public find = async (): Promise<IProfessorEntity[]> => {
    const professorRepository = getCustomRepository(ProfessorRepository);

    const professors = await professorRepository.find({
      relations: ['subject']
    });

    return professors;
  };
}

export default ProfessorService;
