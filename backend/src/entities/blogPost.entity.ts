import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BlogPost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  date: string;

  @Column()
  author: string;

  @Column()
  description: string;

  @Column()
  image: string;
}
