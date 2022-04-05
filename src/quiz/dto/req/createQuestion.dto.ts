import { IsNotEmpty, IsArray, IsString, IsNumber, Min, Max } from 'class-validator';

/**
 * CreateQuestionDTO
 */
export class CreateQuestionDTO {
  @IsNotEmpty()
  @IsArray()
  category: string[];

  @IsNotEmpty()
  @IsString()
  body: string;

  @IsNotEmpty()
  @IsString()
  answer1: string;

  @IsNotEmpty()
  @IsString()
  answer2: string;

  @IsNotEmpty()
  @IsString()
  answer3: string;

  @IsNotEmpty()
  @IsString()
  answer4: string;

  @IsNotEmpty()
  @IsNumber()
  @Min(1)
  @Max(4)
  correctAnswer: number;
}
