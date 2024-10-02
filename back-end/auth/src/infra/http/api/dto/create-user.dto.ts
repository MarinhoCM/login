import { IsEmail, IsString } from "class-validator";
import { templateMessages } from "../constraints/messages";

export class CreateUserDto {
    @IsString({ message: templateMessages.isString.replace('$field', 'name') })
    name: string;

    @IsEmail({}, { message: templateMessages.isEmail.replace('$field', 'email') })
    email: string;

    @IsString({ message: templateMessages.isString.replace('$field', 'password') })
    password: string;
}