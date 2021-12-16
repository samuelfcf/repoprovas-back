import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { IExamEntity } from '../types/Exam';
import Professor from './Professor';
import Subject from './Subject';

@Entity('exams')
class Exam implements IExamEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @Column()
  url: string;

  @ManyToOne(() => Professor, (professor) => professor.id, { cascade: true })
  @JoinColumn({ name: 'professor_id' })
  professor: Professor;

  @ManyToOne(() => Subject, (subject) => subject.id, { cascade: true })
  @JoinColumn({ name: 'subject_id' })
  subject: Subject;
}

export default Exam;
