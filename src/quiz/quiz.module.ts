import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { QuizService } from './services/quiz.service';

// Entities
import { Category } from './entities/category.entity';
import { Question } from './entities/question.entity';
import { User } from './entities/user.entity';
import { UserAnsweredQuestions } from './entities/userAnsweredQuestions.entity';

/**
 * Quiz Module
 */
@Module({
  imports: [TypeOrmModule.forFeature([Category, Question, User, UserAnsweredQuestions])],
  providers: [QuizService],
  controllers: [QuizController],
})
export class QuizModule {}
