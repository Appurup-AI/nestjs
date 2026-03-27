import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCatsDto {
  @ApiProperty({
    description: 'Назваение фильма',
    example: 'Fight Club',
    type: String,
  })
  ttile: string;

  @ApiProperty({
    description: 'Год фильма',
    example: 1999,
    type: Number,
  })
  ralaseYear: number;

  @ApiPropertyOptional({
    description: 'Постер фильма',
    example: 'https://url',
    type: Number,
  })
  poster?: string;

  @ApiProperty({
    description: 'Id актеров',
    example: ['1', '2', '3'],
    type: [String],
  })
  actorIds: string[];
}
