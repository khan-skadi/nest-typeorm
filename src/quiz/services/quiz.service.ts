import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateQuestionDTO } from '../dto/req/createQuestion.dto';

// Entities
import { Category } from '../entities/category.entity';
import { Question } from '../entities/question.entity';
import { User } from '../entities/user.entity';
import { UserAnsweredQuestions } from '../entities/userAnsweredQuestions.entity';

/**
 * Quiz Service
 */
@Injectable()
export class QuizService {
  /**
   * Quiz constructor
   *
   * @param {Repository<Category>} categoriesRepository - The injected categories repository
   * @param {Repository<Question>} questionsRepository - The injected questions repository
   * @param {Repository<User>} usersRepository - The injected users repository
   * @param {Repository<UserAnsweredQuestions>} userAnsweredQuestionsRepository - The injected userAnsweredQuestions rep
   */
  constructor(
    @InjectRepository(Category) private categoriesRepository: Repository<Category>,
    @InjectRepository(Question) private questionsRepository: Repository<Question>,
    @InjectRepository(User) private usersRepository: Repository<User>,
    @InjectRepository(UserAnsweredQuestions) private userAnsweredQuestionsRepository: Repository<UserAnsweredQuestions>
  ) {}

  private async getQuestionsByIds(questionIds: number[]): Promise<any[]> {
    if (!Array.isArray(questionIds) || !questionIds.length) {
      return [];
    }

    return await this.questionsRepository
      .createQueryBuilder('question')
      .where(`question.id IN (:...questionIds)`, { questionIds })
      .innerJoinAndSelect('question.categories', 'categories')
      .getMany();
  }

  async findAll(options: any): Promise<any> {
    const { categories, numberOfQuestions } = options;
    const query = this.questionsRepository.createQueryBuilder('question');

    if (categories) {
      query.innerJoin('question.categories', 'categories', 'categories.id IN (:...categoryIds)', {
        categoryIds: categories,
      });
    }

    const questionIds = (
      await query.select('question.id').groupBy('question.id').limit(numberOfQuestions).getMany()
    ).map((item) => item.id);
    const questions = await this.getQuestionsByIds(questionIds);

    return questions;
  }

  /**
   * Creates a category record
   *
   * @param {any} categoryDTO - The category registration dto
   * @returns {Promise<Category>} - The created category
   */
  async createCategory(categoryDTO: any): Promise<Category> {
    const category: Category = await this.categoriesRepository.create({
      name: categoryDTO.name,
    });

    await this.categoriesRepository.save(category);

    return category;
  }

  /**
   * Creates a question record
   *
   * @param {CreateQuestionDTO} questionDTO - The question dto
   * @returns {Promise<Question>} - The created question
   */
  async createQuestion(questionDTO: CreateQuestionDTO): Promise<Question> {
    const question: Question = await this.questionsRepository.create({
      body: questionDTO.body,
      answer1: questionDTO.answer1,
      answer2: questionDTO.answer2,
      answer3: questionDTO.answer3,
      answer4: questionDTO.answer4,
      correctAnswer: questionDTO.correctAnswer,
    });
    const categories = await this.categoriesRepository.findByIds(questionDTO.category.map((e) => +e));
    question.categories = categories;

    await this.questionsRepository.save(question);

    return question;
  }

  /**
   * Creates a user record
   *
   * @param {any} userDTO - The user DTO
   * @returns {Promise<Question>} - The created question
   */
  async createUser(userDTO: any): Promise<User> {
    const user: User = await this.usersRepository.create({
      firstName: userDTO.firstName,
      lastName: userDTO.lastName,
    });

    await this.usersRepository.save(user);

    return user;
  }

  /**
   * Creates a userAnsweredQuestion record
   *
   * @param {any} userAnsweredQuestionDTO - The userAnsweredQuestion DTO
   * @returns {Promise<Question>} - The created userAnsweredQuestion
   */
  async createUserAnsweredQuestion(userAnsweredQuestionDTO: any): Promise<UserAnsweredQuestions> {
    const userAnsweredQuestion: UserAnsweredQuestions = await this.userAnsweredQuestionsRepository.create({
      user: userAnsweredQuestionDTO.user,
      question: userAnsweredQuestionDTO.question,
      answer: userAnsweredQuestionDTO.answer,
      isCorrect: userAnsweredQuestionDTO.isCorrect,
    });

    await this.userAnsweredQuestionsRepository.save(userAnsweredQuestion);

    return userAnsweredQuestion;
  }
}
