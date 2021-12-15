import { getCustomRepository } from 'typeorm';
import ProfessorRepository from '../repositories/ProfessorRepository';
class ProfessorService {
  public find = async () => {
    const professorRepository = getCustomRepository(ProfessorRepository);

    const professors = await professorRepository.find({
      relations: ['subject']
    });

    return professors;
  };
}

export default ProfessorService;
