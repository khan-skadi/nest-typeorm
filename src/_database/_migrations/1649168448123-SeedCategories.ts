/* eslint-disable max-len */
import { MigrationInterface, QueryRunner } from 'typeorm';

/**
 * Seed categories
 */
export class SeedCategories1649168448123 implements MigrationInterface {
  /**
   * Up
   *
   * @param {QueryRunner} queryRunner - The query runner
   * @returns {Promise<void>} void
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO category(name) VALUES ('movies');`);
    await queryRunner.query(`INSERT INTO category(name) VALUES ('songs');`);
    await queryRunner.query(`INSERT INTO category(name) VALUES ('countries');`);
    await queryRunner.query(`INSERT INTO category(name) VALUES ('cities');`);
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
