import { Controller, Post, Res, Body, HttpException } from '@nestjs/common';
import { Response } from 'express';
import { QuizService } from '../services/quiz.service';
import { CreateQuestionDTO } from '../dto/req/createQuestion.dto';
import { CreateCategoryDTO } from '../dto/req/createCategory.dto';
import { CreateUserDTO } from '../dto/req/createUser.dto';
import { CreateUserAnsweredQuestionDTO } from '../dto/req/createUserAnsweredQuestion.dto';

/**
 * Quiz Controller
 */
@Controller('quiz')
export class QuizController {
  /**
   * Quiz Controller constructor
   *
   * @param {QuizService} quizService - The injected quiz service
   */
  constructor(private readonly quizService: QuizService) {}

  /**
   * Start a quiz for user
   *
   * @param {Response} res - The injected response
   * @param {any} body - The request body
   * @returns {Promise<Response>} - The quiz questions
   */
  @Post()
  async createQuiz(@Res() res: Response, @Body() body: any): Promise<Response> {
    const { filters } = body;

    const questions = await this.quizService.findAll(filters);

    return res.json({ message: 'Success', questions });
  }

  /**
   * Create a category
   *
   * @param {Response} res - The injected response
   * @param {CreateCategoryDTO} createCategoryDTO - The request body
   */
  @Post('/create-category')
  async createCategory(@Res() res: Response, @Body() createCategoryDTO: CreateCategoryDTO): Promise<Response> {
    const category = await this.quizService.createCategory(createCategoryDTO);

    if (!category) {
      throw new HttpException('failed', 400);
    }

    return res.json({ message: 'success', category });
  }

  /**
   * Create a question
   *
   * @param {Response} res - The injected response
   * @param {CreateQuestionDTO} createQuestionDTO - The request body
   */
  @Post('/create-question')
  async createQuestion(@Res() res: Response, @Body() createQuestionDTO: CreateQuestionDTO): Promise<Response> {
    const question = await this.quizService.createQuestion(createQuestionDTO);

    if (!question) {
      throw new HttpException('failed', 400);
    }

    return res.json({ message: 'success', question });
  }

  /**
   * Create a user
   *
   * @param {Response} res - The injected response
   * @param {CreateUserDTO} createUserDTO - The request body
   */
  @Post('/create-user')
  async createUser(@Res() res: Response, @Body() createUserDTO: CreateUserDTO): Promise<Response> {
    const user = await this.quizService.createUser(createUserDTO);

    if (!user) {
      throw new HttpException('failed', 400);
    }

    return res.json({ message: 'success', user });
  }

  /**
   * Create a userAnsweredQuestion
   *
   * @param {Response} res - The injected response
   * @param {CreateUserAnsweredQuestionDTO} createUserAnsweredQuestionDTO - The request body
   */
  @Post('/create-userAnsweredQuestion')
  async createUserAnsweredQuestion(
    @Res() res: Response,
    @Body() createUserAnsweredQuestionDTO: CreateUserAnsweredQuestionDTO
  ): Promise<Response> {
    const userAnsweredQuestion = await this.quizService.createUserAnsweredQuestion(createUserAnsweredQuestionDTO);

    if (!userAnsweredQuestion) {
      throw new HttpException('failed', 400);
    }

    return res.json({ message: 'success', userAnsweredQuestion });
  }
}
