import { isBoolean, IsNotEmpty, IsString, Length } from 'class-validator';

export class UpdateTaskDto {
  @IsString({ message: 'Название задачи должно быть строкой' })
  @IsNotEmpty({ message: 'Название не должно быть пустым' })
  @Length(2, 40, { message: 'Название должно быть от 2 до 40 симолов' })
  title: string;

  isCompleted: boolean;
}
