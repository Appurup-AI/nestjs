import { Controller, Get, HttpStatus, Post, Body } from '@nestjs/common';
import { CatsService } from './cats.service';
import {
  ApiHeader,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
  ApiBody,
  ApiOkResponse,
} from '@nestjs/swagger';
import { CreateCatsDto } from './dto/create-cat-.dto';
import { MovieResponse } from './dto/cats.dto';

@ApiTags('Cats')
@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @ApiOperation({
    summary: 'Получить список фильмов',
    description: 'Возвращает список',
  })
  @ApiResponse({ status: HttpStatus.OK, description: 'Фильм найден' })
  @Get()
  findAll() {
    return [
      {
        id: 1,
        title: 'Fight Club',
      },
    ];
  }

  @ApiOperation({
    summary: 'Получить фильм по ID',
    description: 'Возвращает информацию о фильме',
  })
  @ApiParam({ name: 'id', type: 'string', description: 'ID фильма' })
  @ApiHeader({ name: 'X-Auth-Token', description: 'Токен авториазации' })
  @ApiOkResponse({ description: 'Фильм найден', type: MovieResponse })
  @ApiResponse({
    status: HttpStatus.NOT_FOUND,
    description: 'Фильм не  найден',
  })
  @Get(':id')
  findById() {
    return [
      {
        id: 1,
        title: 'Fight Club',
      },
    ];
  }

  @ApiOperation({ summary: 'Создать фильм' })
  @Post()
  create(@Body() dto: CreateCatsDto) {
    return dto;
  }
}
