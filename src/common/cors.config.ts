import { Logger } from '@nestjs/common';

const logger = new Logger('CORS');

/** Strip trailing slash so `https://app.vercel.app/` matches browser Origin header. */
export function normalizeOrigin(origin: string): string {
  return origin.trim().replace(/\/$/, '');
}

export interface CorsSettings {
  /** When false, any browser origin is allowed (FRONTEND_URL missing). */
  strict: boolean;
  allowed: string[];
}

export function getCorsSettings(): CorsSettings {
  const raw =
    process.env.FRONTEND_URL ??
    process.env.CORS_ORIGINS ??
    '';

  const fromEnv = raw
    .split(',')
    .map((o) => normalizeOrigin(o))
    .filter(Boolean);

  const local = 'http://localhost:5173';

  if (fromEnv.length === 0) {
    logger.warn(
      'FRONTEND_URL is not set — CORS allows all origins. ' +
        'Set FRONTEND_URL=https://asses-frontend.vercel.app on Render for production.',
    );
    return { strict: false, allowed: [local] };
  }

  const allowed = [...new Set([...fromEnv, local])];
  logger.log(`CORS strict mode — allowed origins: ${allowed.join(', ')}`);
  return { strict: true, allowed };
}

export function createCorsOriginValidator(settings: CorsSettings) {
  const allowedSet = new Set(settings.allowed.map(normalizeOrigin));

  return (
    origin: string | undefined,
    callback: (err: Error | null, allow?: boolean) => void,
  ) => {
    if (!origin) {
      callback(null, true);
      return;
    }

    const normalized = normalizeOrigin(origin);

    if (!settings.strict) {
      callback(null, true);
      return;
    }

    if (allowedSet.has(normalized)) {
      callback(null, true);
      return;
    }

    logger.warn(
      `CORS blocked origin "${normalized}". Allowed: ${[...allowedSet].join(', ')}. ` +
        `Set FRONTEND_URL on Render to exactly: ${normalized}`,
    );
    callback(null, false);
  };
}
