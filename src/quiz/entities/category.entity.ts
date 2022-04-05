import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from './question.entity';

/**
 * Category Entity
 */
@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Question, (question) => question.categories, { onDelete: 'CASCADE' })
  questions: Question[];
}
