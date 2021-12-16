import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn
} from 'typeorm';
import Professor from './Professor';

@Entity('exams')
class Exam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  category: string;

  @ManyToMany(() => Professor, (professors) => professors.exams)
  @JoinColumn({ name: 'professor_id' })
  professors: Professor[];
}

export default Exam;
