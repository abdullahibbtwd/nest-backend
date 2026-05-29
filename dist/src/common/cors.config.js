"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeOrigin = normalizeOrigin;
exports.getCorsSettings = getCorsSettings;
exports.createCorsOriginValidator = createCorsOriginValidator;
const common_1 = require("@nestjs/common");
const logger = new common_1.Logger('CORS');
function normalizeOrigin(origin) {
    return origin.trim().replace(/\/$/, '');
}
function getCorsSettings() {
    const raw = process.env.FRONTEND_URL ??
        process.env.CORS_ORIGINS ??
        '';
    const fromEnv = raw
        .split(',')
        .map((o) => normalizeOrigin(o))
        .filter(Boolean);
    const local = 'http://localhost:5173';
    if (fromEnv.length === 0) {
        logger.warn('FRONTEND_URL is not set — CORS allows all origins. ' +
            'Set FRONTEND_URL=https://asses-frontend.vercel.app on Render for production.');
        return { strict: false, allowed: [local] };
    }
    const allowed = [...new Set([...fromEnv, local])];
    logger.log(`CORS strict mode — allowed origins: ${allowed.join(', ')}`);
    return { strict: true, allowed };
}
function createCorsOriginValidator(settings) {
    const allowedSet = new Set(settings.allowed.map(normalizeOrigin));
    return (origin, callback) => {
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
        logger.warn(`CORS blocked origin "${normalized}". Allowed: ${[...allowedSet].join(', ')}. ` +
            `Set FRONTEND_URL on Render to exactly: ${normalized}`);
        callback(null, false);
    };
}
//# sourceMappingURL=cors.config.js.map