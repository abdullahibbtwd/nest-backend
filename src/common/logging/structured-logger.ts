import { Logger } from '@nestjs/common';

export type LogLevel = 'log' | 'warn' | 'error' | 'debug';

export interface StructuredLogPayload {
  level: LogLevel;
  context: string;
  message: string;
  timestamp: string;
  [key: string]: unknown;
}

/** JSON line for Render / log aggregators (one object per line). */
export function logStructured(
  context: string,
  message: string,
  level: LogLevel = 'log',
  meta?: Record<string, unknown>,
) {
  const payload: StructuredLogPayload = {
    level,
    context,
    message,
    timestamp: new Date().toISOString(),
    ...meta,
  };

  const line = JSON.stringify(payload);
  const logger = new Logger(context);

  switch (level) {
    case 'error':
      logger.error(line);
      break;
    case 'warn':
      logger.warn(line);
      break;
    case 'debug':
      logger.debug(line);
      break;
    default:
      logger.log(line);
  }
}
