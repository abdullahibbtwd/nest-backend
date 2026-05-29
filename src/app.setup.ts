import { Logger, ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import {
  createCorsOriginValidator,
  getCorsSettings,
} from './common/cors.config';
import { HttpExceptionFilter } from './common/filters/http-exception.filter';

export function configureApp(app: NestExpressApplication) {
  const logger = new Logger('Bootstrap');
  const corsSettings = getCorsSettings();

  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, transform: true }),
  );
  app.useGlobalFilters(new HttpExceptionFilter());

  app.enableCors({
    origin: createCorsOriginValidator(corsSettings),
    credentials: true,
    methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
    exposedHeaders: ['Content-Length'],
    maxAge: 86400,
  });

  logger.log(`API prefix: /api`);
  logger.log(`Health: GET /api/health`);
  logger.log(
    `FRONTEND_URL: ${process.env.FRONTEND_URL ?? '(not set — CORS permissive)'}`,
  );
  logger.log(`NODE_ENV: ${process.env.NODE_ENV ?? 'development'}`);
  logger.log(`PORT: ${process.env.PORT ?? 3000}`);
}
