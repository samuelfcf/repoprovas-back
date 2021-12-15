import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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
}

export default Subject;
