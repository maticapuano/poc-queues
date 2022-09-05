import { HttpStatus } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";
import { Request, Response } from "express";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix("/api");

  const config = new DocumentBuilder()
    .setTitle("MS PULL")
    .setVersion("1.0")
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup("api/docs", app, document);

  app
    .getHttpAdapter()
    .get("/api/docs/swagger.json", (_: Request, res: Response): Response => {
      return res.status(HttpStatus.OK).json(document);
    });

  await app.listen(3001);
}

bootstrap();
