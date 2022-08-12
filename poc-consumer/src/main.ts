import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = Math.floor(Math.random() * (4000 - 3000 + 1)) + 3000;

  await app.listen(port, () => Logger.log(`Server listen on port ${port}`));
}

bootstrap();
