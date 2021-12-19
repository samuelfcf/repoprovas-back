import Exam from '../entities/Exam';
import Professor from '../entities/Professor';

interface ISubjectEntity {
  id: number;
  name: string;
  period: string;
  examsQuantity: number;
  professor: Professor[];
  exams: Exam[];
}

export { ISubjectEntity };
