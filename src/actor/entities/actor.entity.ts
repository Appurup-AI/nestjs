import { MovieEntity } from 'src/movie/entities/movie.entity';

import {
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
} from 'typeorm';

@Entity({ name: 'actors' })
export class ActorEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  name: string;

  @ManyToMany(() => MovieEntity, (movie) => movie.actors)
  movies: MovieEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}
