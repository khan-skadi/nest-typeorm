/* eslint-disable max-len */
import { MigrationInterface, QueryRunner } from 'typeorm';

/**
 * Initial Migration
 */
export class InitMigration1649160133550 implements MigrationInterface {
  name = 'InitMigration1649160133550';

  /**
   * Up
   *
   * @param {QueryRunner} queryRunner - The query runner
   * @returns {Promise<void>} void
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "question" ("id" SERIAL NOT NULL, "body" character varying NOT NULL, "answer1" character varying, "answer2" character varying, "answer3" character varying, "answer4" character varying, "correctAnswer" integer NOT NULL, CONSTRAINT "PK_21e5786aa0ea704ae185a79b2d5" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "questionId" integer, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "user" ("id" SERIAL NOT NULL, "firstName" character varying NOT NULL, "lastName" character varying NOT NULL, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`
    );
    await queryRunner.query(
      `CREATE TABLE "user_answered_questions" ("question" SERIAL NOT NULL, "answer" integer NOT NULL, "isCorrect" integer NOT NULL, "userId" integer, "questionId" integer, CONSTRAINT "REL_75e6a19faa4787050cf748ce12" UNIQUE ("userId"), CONSTRAINT "REL_0ab1562a9319184d906a671fa0" UNIQUE ("questionId"), CONSTRAINT "PK_4ad9ad93ae718edb7b92cb0d3f9" PRIMARY KEY ("question"))`
    );
    await queryRunner.query(
      `ALTER TABLE "category" ADD CONSTRAINT "FK_e79f0a2b18cae879cee547f495b" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "user_answered_questions" ADD CONSTRAINT "FK_75e6a19faa4787050cf748ce12a" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
    await queryRunner.query(
      `ALTER TABLE "user_answered_questions" ADD CONSTRAINT "FK_0ab1562a9319184d906a671fa07" FOREIGN KEY ("questionId") REFERENCES "question"("id") ON DELETE CASCADE ON UPDATE NO ACTION`
    );
  }

  /**
   * Down
   *
   * @param {QueryRunner} queryRunner - The query runner
   * @returns {Promise<void>} void
   */
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`ALTER TABLE "user_answered_questions" DROP CONSTRAINT "FK_0ab1562a9319184d906a671fa07"`);
    await queryRunner.query(`ALTER TABLE "user_answered_questions" DROP CONSTRAINT "FK_75e6a19faa4787050cf748ce12a"`);
    await queryRunner.query(`ALTER TABLE "category" DROP CONSTRAINT "FK_e79f0a2b18cae879cee547f495b"`);
    await queryRunner.query(`DROP TABLE "user_answered_questions"`);
    await queryRunner.query(`DROP TABLE "user"`);
    await queryRunner.query(`DROP TABLE "category"`);
    await queryRunner.query(`DROP TABLE "question"`);
  }
}
