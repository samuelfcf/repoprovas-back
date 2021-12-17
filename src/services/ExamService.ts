import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import ExamRepository from '../repositories/ExamRepository';
import ProfessorRepository from '../repositories/ProfessorRepository';
import SubjectRepository from '../repositories/SubjectRepository';
import { IExam, IExamEntity } from '../types/Exam';

class ExamService {
  public find = async () => {
    const examRepository = getCustomRepository(ExamRepository);
    const exams = await examRepository.find({
      relations: ['professor', 'subject']
    });

    return exams;
  };

  public create = async (data: IExam): Promise<IExamEntity> => {
    const examRepository = getCustomRepository(ExamRepository);
    const professorRepository = getCustomRepository(ProfessorRepository);
    const subjectRepository = getCustomRepository(SubjectRepository);

    const { name, category, url, professorId, subjectId } = data;
    const professorExists = await professorRepository.findOne({
      where: { id: professorId }
    });
    if (!professorExists) throw new AppError(`Professor not registered.`, 404);

    const subjectExists = await subjectRepository.findOne({
      where: { id: subjectId }
    });
    if (!subjectExists) throw new AppError(`Subject doesn't exists.`, 404);

    const exam = examRepository.create({
      name,
      category,
      url,
      professor: professorExists,
      subject: subjectExists
    });

    exam.subject.examsQuantity += 1;
    await examRepository.save(exam);

    return exam;
  };
}

export default ExamService;
