import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class ApiService {
    constructor(
        private readonly prismaService: PrismaService,
    ) { }


    async login(data: LoginDto) {

        const { email, password } = data;

        const user = await this.prismaService.user.findUnique({
            where: { email },
        });

        if (!user) {
            throw new UnauthorizedException('Credenciais inválidas');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            throw new UnauthorizedException('Credenciais inválidas');
        }

        const payload = { email: user.email, sub: user.id };
        return { access_info: payload };
    }

    async create(userData: CreateUserDto) {
        const { email, password } = userData;

        const user = await this.prismaService.user.findUnique({
            where: { email },
        });

        if (user){
            throw new BadRequestException(`O email: ${email} já existe, tente realizar o login`)
        } else {
            const isPasswordValid = await bcrypt.compare(password, user.password);
            if (!isPasswordValid) {
                throw new UnauthorizedException('Credenciais inválidas');
            }

            const createdUser = await this.prismaService.user.create({
                data: userData
            });

            return {data: createdUser, message: 'Usuário criado com sucesso!'}
        }
    }
}