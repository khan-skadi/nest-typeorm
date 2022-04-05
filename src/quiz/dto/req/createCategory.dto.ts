import { IsNotEmpty, IsString, IsOptional } from 'class-validator';

/**
 * CreateCategoryDTO
 */
export class CreateCategoryDTO {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsOptional()
  @IsString()
  question: string;
}
