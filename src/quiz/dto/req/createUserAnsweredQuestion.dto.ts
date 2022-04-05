import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

/**
 * CreateUserAnsweredQuestionDTO
 */
export class CreateUserAnsweredQuestionDTO {
  @IsNotEmpty()
  @IsString()
  user: string;

  @IsNotEmpty()
  @IsString()
  question: string;

  @IsNotEmpty()
  @IsNumber()
  answer: number;

  @IsNotEmpty()
  @IsNumber()
  isCorrect: number;
}
