import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import { serverConfig } from './config/settings.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger(AppModule.name);
  app.useGlobalPipes(new ValidationPipe({ transform: true, whitelist: true }))
  await app.listen(serverConfig.port, '0.0.0.0');
  logger.log(`servidor executando na porta: ${serverConfig.port}`)
}
bootstrap();
