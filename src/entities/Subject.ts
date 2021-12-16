import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import Exam from './Exam';
import Professor from './Professor';

@Entity('subjects')
class Subject {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  period: string;

  @Column()
  quantity: number;

  @OneToMany(() => Professor, (professor) => professor.id)
  professor: Professor[];

  @OneToMany(() => Exam, (exam) => exam.id)
  exam: Exam[];
}

export default Subject;
