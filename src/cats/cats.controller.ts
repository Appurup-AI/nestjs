import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @ApiOperation({
    summary: 'Получить список фильмов',
    description: 'Возвращает список',
  })
  @Get()
  findAll() {
    return [
      {
        id: 1,
        title: 'Fight Club',
      },
    ];
  }
}
