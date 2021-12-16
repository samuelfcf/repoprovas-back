import Exam from '../entities/Exam';
import Professor from '../entities/Professor';

interface ISubjectEntity {
  id: number;
  name: string;
  period: string;
  quantity: number;
  professor: Professor[];
  exam: Exam[];
}

export { ISubjectEntity };
