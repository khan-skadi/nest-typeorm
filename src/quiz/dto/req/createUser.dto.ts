import { IsNotEmpty, IsString } from 'class-validator';

/**
 * CreateUserDTO
 */
export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;
}
