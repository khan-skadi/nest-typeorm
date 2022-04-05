import { MigrationInterface, QueryRunner } from 'typeorm';

/**
 * Seed test users
 */
export class SeedUsers1649167376720 implements MigrationInterface {
  /**
   * Up
   *
   * @param {QueryRunner} queryRunner - The query runner
   * @returns {Promise<void>} void
   */
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`INSERT INTO user(firstName, lastName) VALUES ('Khan', 'Skadi');`);
    await queryRunner.query(`INSERT INTO user(firstName, lastName) VALUES ('Hans', 'Landa');`);
    await queryRunner.query(`INSERT INTO user(firstName, lastName) VALUES ('James', 'Johnson');`);
    await queryRunner.query(`INSERT INTO user(firstName, lastName) VALUES ('John', 'Doe');`);
    await queryRunner.query(`INSERT INTO user(firstName, lastName) VALUES ('Jan', 'Michael-Vincent');`);
    await queryRunner.query(`INSERT INTO user(firstName, lastName) VALUES ('Harry', 'Potter');`);
    await queryRunner.query(`INSERT INTO user(firstName, lastName) VALUES ('Hernando', 'Rodrigez');`);
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
