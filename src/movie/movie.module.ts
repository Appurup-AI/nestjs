import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MoiveEntity } from './entities/movie.entity';

@Module({
  imports: [TypeOrmModule.forFeature([MoiveEntity])],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
