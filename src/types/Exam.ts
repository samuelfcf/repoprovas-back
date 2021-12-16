import Professor from '../entities/Professor';
import Subject from '../entities/Subject';

interface IExamEntity {
  name: string;
  category: string;
  url: string;
  subject: Subject;
  professor: Professor;
}

interface IExam extends Omit<IExamEntity, 'subject' | 'professor'> {
  subjectId: number;
  professorId: number;
}

export { IExam, IExamEntity };
