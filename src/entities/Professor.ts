import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import { IProfessorEntity } from '../types/Professor';
import Exam from './Exam';
import Subject from './Subject';

@Entity('professors')
class Professor implements IProfessorEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Subject)
  @JoinColumn({ name: 'subject_id' })
  subject: Subject;

  @ManyToMany(() => Exam, (exam) => exam.id)
  exams: Exam[];
}

export default Professor;
