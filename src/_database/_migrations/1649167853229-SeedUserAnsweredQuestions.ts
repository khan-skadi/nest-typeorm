/* eslint-disable max-len */
import { MigrationInterface, QueryRunner } from 'typeorm';

/**
 * Seed answered questions
 */
export class SeedUserAnsweredQuestions1649167853229 implements MigrationInterface {
  /**
   * Up
   *
   * @param {QueryRunner} queryRunner - The query runner
   * @returns {Promise<void>} void
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO user_answered_questions(question, answer, isCorrect, userId, questionId) VALUES ('1', 2, 2, '1', '1');`
    );
    await queryRunner.query(
      `INSERT INTO user_answered_questions(question, answer, isCorrect, userId, questionId) VALUES ('1', 3, 2, '1', '1');`
    );
    await queryRunner.query(
      `INSERT INTO user_answered_questions(question, answer, isCorrect, userId, questionId) VALUES ('1', 1, 2, '1', '1');`
    );
    await queryRunner.query(
      `INSERT INTO user_answered_questions(question, answer, isCorrect, userId, questionId) VALUES ('1', 2, 2, '1', '1');`
    );
  }

  /**
   * Down
   *
   * @param {QueryRunner} queryRunner - The query runner
   * @returns {Promise<void>} void
   */
  public async down(queryRunner: QueryRunner): Promise<void> {
    // do not perform any delete/rollback here
    // updates to static data should be incremental and take foreign ids into consideration
  }
}
