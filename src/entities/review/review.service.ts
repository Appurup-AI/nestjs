import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { type Review } from 'generated/prisma/client';
@Injectable()
export class ReviewService {
  constructor(private readonly PrismaService: PrismaService) {}

  async create(dto: CreateReviewDto): Promise<Review> {
    const { text, rating, movieId } = dto;

    const review = await this.PrismaService.review.create({
      data: { text, rating, movie: { connect: { id: movieId } } },
    });

    return review;
  }
}
