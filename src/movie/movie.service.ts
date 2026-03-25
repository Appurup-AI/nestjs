import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { MovieDto } from './dto/movie.dto';
import { Movie } from 'generated/prisma/client';

@Injectable()
export class MovieService {
  constructor(private readonly PrismaService: PrismaService) {}

  async findAll() {
    return await this.PrismaService.movie.findMany({
      where: {
        isAvailabel: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
      select: { actors: { select: { id: true, name: true } } },
    });
  }

  async create(dto: MovieDto): Promise<Movie> {
    const { title, relaseYear, actorIds, imageUrl } = dto;

    const actors = await this.PrismaService.actor.findMany({
      where: {
        id: { in: actorIds },
      },
    });

    if (!actors || !actors.length)
      throw new NotFoundException('Один или несколько акетров должны быть');

    const movie = await this.PrismaService.movie.create({
      data: {
        title,
        relaseYear,
        poster: imageUrl
          ? {
              create: {
                url: imageUrl,
              },
            }
          : undefined,
        actors: {
          connect: actors.map((actor) => ({
            id: actor.id,
          })),
        },
      },
    });

    return movie;
  }

  async findById(id: string): Promise<Movie> {
    const movie = await this.PrismaService.movie.findUnique({
      where: {
        id,
      },
      include: {
        actors: true,
        poster: true,
      },
    });

    if (!movie || !movie.isAvailabel)
      throw new NotFoundException('Фильм не найден');

    return movie;
  }

  async update(id: string, dto: MovieDto): Promise<boolean> {
    const movie = await this.findById(id);

    const actors = await this.PrismaService.actor.findMany({
      where: {
        id: { in: dto.actorIds },
      },
    });

    if (!actors || !actors.length)
      throw new NotFoundException('Один или несколько акетров должны быть');

    await this.PrismaService.movie.update({
      where: { id: movie.id },
      data: {
        title: dto.title,
        relaseYear: dto.relaseYear,
        poster: dto.imageUrl
          ? {
              create: {
                url: dto.imageUrl,
              },
            }
          : undefined,
        actors: {
          connect: actors.map((actor) => ({
            id: actor.id,
          })),
        },
      },
    });

    return true;
  }

  async delete(id: string): Promise<string> {
    const movie = await this.findById(id);

    await this.PrismaService.movie.delete({
      where: { id },
    });

    return movie.id;
  }
}
