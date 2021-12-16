import { EntityRepository, Repository } from 'typeorm';
import Exam from '../entities/Exam';

@EntityRepository(Exam)
class ExamRepository extends Repository<Exam> {}

export default ExamRepository;
