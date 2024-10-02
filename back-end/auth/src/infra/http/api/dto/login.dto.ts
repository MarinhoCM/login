import { IsEmail, IsString } from "class-validator";
import { templateMessages } from "src/infra/http/api/constraints/messages";

export class LoginDto {
    @IsEmail({}, { message: templateMessages.isEmail.replace('$field', 'email') })
    email: string;

    @IsString({ message: templateMessages.isString.replace('$field', 'password') })
    password: string;
}