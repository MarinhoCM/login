import { Body, Controller, Post } from '@nestjs/common';
import { ApiService } from './api.service';
import { LoginDto } from './dto/login.dto';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('api')
export class ApiController {
  constructor(private readonly apiService: ApiService) {}

  @Post('login')
  async login(@Body() loginData: LoginDto){
    console.log(loginData)
    return await this.apiService.login(loginData);
  }

  @Post('register')
  async create(@Body() userData: CreateUserDto){
    return await this.apiService.create(userData);
  }
}
