import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { envs } from 'src/config/envs';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  app.enableCors();
  await app.listen(envs.PORT);
}
bootstrap();
