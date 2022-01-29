import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Attraction {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  detail: string;

  @Column()
  coverimage: string;

  @Column()
  latitude: number;

  @Column()
  longitude: number;
}