import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import Subject from './Subject';

@Entity('professors')
class Professor {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToOne(() => Subject, (subject) => subject.id)
  subject: Subject;
}

export default Professor;
