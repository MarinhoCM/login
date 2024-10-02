import { Module } from '@nestjs/common';
import { PrismaService } from 'src/infra/database/prisma/prisma.service';
import { ApiService } from './api.service';

@Module({
  imports: [],
  providers: [ApiService, PrismaService],
  exports: [ApiService],
})
export class ApiModule { }
