import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Subject from './Subject';

@Entity('professors')
class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Subject, (subject) => subject.professor)
  subject: Subject;
}

export default Professor;
