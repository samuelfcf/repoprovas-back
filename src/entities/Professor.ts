import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import Exam from './Exam';
import Subject from './Subject';

@Entity('professors')
class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Subject)
  @JoinColumn({ name: 'subject_id' })
  subject: Subject;

  @ManyToMany(() => Exam, (exam) => exam.professor)
  exams: Exam[];
}

export default Professor;
