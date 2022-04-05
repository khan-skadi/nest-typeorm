/* eslint-disable max-len */
import { MigrationInterface, QueryRunner } from 'typeorm';

/**
 * Seed questions
 */
export class SeedQuestions1649168262490 implements MigrationInterface {
  /**
   * Up
   *
   * @param {QueryRunner} queryRunner - The query runner
   * @returns {Promise<void>} void
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `INSERT INTO question(body, answer1, answer2, answer3, answer4, correctAnswer) VALUES ('Who is president of the United States?', 'Obama', 'Biden', 'Trump', 'Nixon', 2);`
    );
    await queryRunner.query(
      `INSERT INTO question(body, answer1, answer2, answer3, answer4, correctAnswer) VALUES ('Who is president of the United States?', 'Obama', 'Biden', 'Trump', 'Nixon', 2);`
    );
    await queryRunner.query(
      `INSERT INTO question(body, answer1, answer2, answer3, answer4, correctAnswer) VALUES ('Who is president of the United States?', 'Obama', 'Biden', 'Trump', 'Nixon', 2);`
    );
    await queryRunner.query(
      `INSERT INTO question(body, answer1, answer2, answer3, answer4, correctAnswer) VALUES ('Who is president of the United States?', 'Obama', 'Biden', 'Trump', 'Nixon', 2);`
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
