import { Column, Entity, ManyToMany, JoinTable, PrimaryGeneratedColumn } from 'typeorm';
import { Category } from './category.entity';

/**
 * Question Entity
 */
@Entity()
export class Question {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Category, (category) => category.questions)
  @JoinTable()
  categories: Category[];

  @Column()
  body: string;

  @Column({ nullable: true })
  answer1: string;

  @Column({ nullable: true })
  answer2: string;

  @Column({ nullable: true })
  answer3: string;

  @Column({ nullable: true })
  answer4: string;

  @Column()
  correctAnswer: number;
}
