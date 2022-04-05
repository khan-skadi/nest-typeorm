import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

// Entities
import { Category } from './quiz/entities/category.entity';
import { Question } from './quiz/entities/question.entity';
import { User } from './quiz/entities/user.entity';
import { UserAnsweredQuestions } from './quiz/entities/userAnsweredQuestions.entity';

const entities = [Category, Question, User, UserAnsweredQuestions];

/**
 * TypeOrmConfigService
 */
@Injectable()
export class TypeOrmConfigService implements TypeOrmOptionsFactory {
  /**
   * @param {ConfigService} configService - Configuration Service
   */
  constructor(private configService: ConfigService) {}

  /**
   * TypeOrmModuleOptions
   *
   * @returns {TypeOrmModuleOptions} - Typeorm options
   */
  createTypeOrmOptions(): Promise<TypeOrmModuleOptions> | TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      ssl: false,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities,
      synchronize: true,
    };
  }
}
