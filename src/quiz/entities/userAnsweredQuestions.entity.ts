import { Column, JoinColumn, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Question } from './question.entity';
import { User } from './user.entity';

/**
 * UserAnsweredQuestions Entity
 */
@Entity()
export class UserAnsweredQuestions {
  @PrimaryGeneratedColumn()
  id: string;

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;

  @OneToOne(() => Question, { onDelete: 'CASCADE' })
  @JoinColumn()
  question: Question;

  @Column()
  answer: number;

  @Column()
  isCorrect: number;
}
