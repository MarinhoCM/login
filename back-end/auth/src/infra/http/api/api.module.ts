import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { ApiService } from './api.service';
import { ApiController } from './api.controller';

@Module({
  imports: [],
  providers: [ApiService, PrismaService],
  exports: [ApiService],
  controllers: [ApiController]
})
export class ApiModule { }
