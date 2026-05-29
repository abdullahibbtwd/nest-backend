import { Injectable, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { logStructured } from '../logging/structured-logger';

@Injectable()
export class RequestLoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { method, originalUrl } = req;
    const origin = req.headers.origin ?? null;
    const start = Date.now();

    res.on('finish', () => {
      const ms = Date.now() - start;
      const level =
        res.statusCode >= 500
          ? 'error'
          : res.statusCode >= 400
            ? 'warn'
            : 'log';

      logStructured('HTTP', `${method} ${originalUrl}`, level, {
        statusCode: res.statusCode,
        durationMs: ms,
        origin,
        method,
        path: originalUrl,
      });
    });

    if (method === 'OPTIONS') {
      logStructured('HTTP', `Preflight ${originalUrl}`, 'debug', { origin });
    }

    next();
  }
}
