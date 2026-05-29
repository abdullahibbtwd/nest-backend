import 'dotenv/config';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { configureApp } from './app.setup';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  try {
    const app = await NestFactory.create<NestExpressApplication>(AppModule, {
      logger: ['error', 'warn', 'log', 'debug'],
    });

    configureApp(app);

    const port = Number(process.env.PORT) || 3000;
    await app.listen(port, '0.0.0.0');

    logger.log(`Listening on http://0.0.0.0:${port}`);
  } catch (err) {
    logger.error('Failed to start application', err);
    process.exit(1);
  }
}

bootstrap().catch((err) => {
  console.error('Bootstrap fatal:', err);
  process.exit(1);
});
