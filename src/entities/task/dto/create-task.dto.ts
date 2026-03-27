import {
  IsNotEmpty,
  IsString,
  Length,
  IsOptional,
  IsInt,
  IsPositive,
  IsArray,
  IsEnum,
} from 'class-validator';

export enum TaskTag {
  WORK = 'work',
  STUDY = 'study',
  HOME = 'home',
}

export class CreateTaskDto {
  @IsString()
  @IsNotEmpty()
  @Length(2, 40)
  title: string;

  @IsString()
  @IsOptional()
  description: string;

  @IsInt({ message: 'Приоритет должен быть целым числом' })
  @IsPositive({ message: 'Приоритет должен быть положительным' })
  @IsOptional()
  priority: number;

  @IsArray({ message: 'Теги должны быть массивом' })
  @IsEnum(TaskTag, { each: true, message: 'Недопутсимое значение тэга' })
  @IsOptional()
  tags: TaskTag[];
}
