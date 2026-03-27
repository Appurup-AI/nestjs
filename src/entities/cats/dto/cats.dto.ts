import { ApiProperty } from '@nestjs/swagger';

export class MovieResponse {
  @ApiProperty({
    description: 'ID фильма',
    example: '123',
    type: String,
  })
  id: string;

  @ApiProperty({
    description: 'Назваение фильма',
    example: 'Fight Club',
    type: String,
  })
  ttile: string;
}
