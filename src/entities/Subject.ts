import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
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

  @OneToMany(() => Professor, (professor) => professor.subject)
  professor: Professor[];
}

export default Subject;
