import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginRequest {
  @ApiProperty({
    description: 'Почтовый адрес',
    example: 'johndoe@example.com',
  })
  @IsString({ message: 'Почта должна быть строкой' })
  @IsNotEmpty({ message: 'Почта обязательно для заполнения' })
  @IsEmail({}, { message: 'Некорректный формат электронной почты' })
  email: string;

  @ApiProperty({
    description: 'Пароль',
    example: '123456',
    minLength: 6,
    maxLength: 128,
  })
  @IsString({ message: 'Пароль должна быть строкой' })
  @IsNotEmpty({ message: 'Пароль обязателен для заполнения' })
  @MaxLength(128, { message: 'Пароль должен быть меньше 128 символов' })
  @MinLength(6, { message: 'Пароль должен быть больше 6 символов' })
  password: string;
}
