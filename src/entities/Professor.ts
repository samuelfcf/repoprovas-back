import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import Subject from './Subject';

@Entity('professors')
class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Subject, (subject) => subject.professor)
  @JoinColumn({ name: 'subject_id' })
  subject: Subject;
}

export default Professor;
