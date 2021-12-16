import Exam from '../entities/Exam';
import Subject from '../entities/Subject';

interface IProfessorEntity {
  id: number;
  name: string;
  subject: Subject;
  exams: Exam[];
}

export { IProfessorEntity };
