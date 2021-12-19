import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ISubjectEntity } from '../types/Subject';
import Exam from './Exam';
import Professor from './Professor';

@Entity('subjects')
class Subject implements ISubjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  period: string;

  @Column({ name: 'exams_quantity' })
  examsQuantity: number;

  @OneToMany(() => Professor, (professor) => professor.id)
  professor: Professor[];

  @OneToMany(() => Exam, (exam) => exam.subject)
  exams: Exam[];
}

export default Subject;
