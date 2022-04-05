import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * User Entity
 */
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;
}
