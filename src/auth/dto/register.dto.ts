import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class RegisterRequest {
  @IsString({ message: 'Имя должно быть строкой' })
  @IsNotEmpty({ message: 'Имя обязательно для заполнения' })
  @MaxLength(50, { message: 'Имя не должно превышать 50 символов' })
  name: string;

  @IsString({ message: 'Почта должна быть строкой' })
  @IsNotEmpty({ message: 'Почта обязательно для заполнения' })
  @IsEmail({}, { message: 'Некорректный формат электронной почты' })
  email: string;

  @IsString({ message: 'Пароль должна быть строкой' })
  @IsNotEmpty({ message: 'Пароль обязателен для заполнения' })
  @MaxLength(128, { message: 'Пароль должен быть меньше 128 символов' })
  @MinLength(6, { message: 'Пароль должен быть больше 6 символов' })
  password: string;
}
