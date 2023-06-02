import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as winston from 'winston';
import { WinstonModule } from 'nest-winston';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const result = require('dotenv').config({
  path: `.env`,
});

const errorStackTracerFormat = winston.format((info) => {
  if (info instanceof Error) {
    return Object.assign({}, info, {
      stack: info.stack,
      message: info.message,
    });
  }
  return info;
});

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    // logger: WinstonModule.createLogger({
    //   format: winston.format.combine(
    //     winston.format.splat(), // Necessary to produce the 'meta' property
    //     errorStackTracerFormat(),
    //     winston.format.simple(),
    //   ),
    // }),
  });
  // Setup Swagger
  const options = new DocumentBuilder()
    .setTitle('NFT Service')
    .setDescription('The Market Service API description')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, options);

  if (process.env.ENABLE_SWAGGER == 'true') {
    SwaggerModule.setup('docs', app, document);
  }
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.enableCors();
  await app.listen(process.env.PORT);
}
bootstrap();
