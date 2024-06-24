import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class LoginDto {
  @IsNotEmpty({ message: 'O e-mail deve ser informado' })
  @IsEmail(
    {},
    {
      message(validationArguments) {
        return `O e-mail${validationArguments.value ? ` ${validationArguments.value}` : ''} é inválido`;
      },
    },
  )
  email: string;

  @IsNotEmpty()
  @MinLength(8, { message: 'A senha deve ter pelo menos 8 caracteres' })
  password: string;
}
