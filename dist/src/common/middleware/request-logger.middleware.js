"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestLoggerMiddleware = void 0;
const common_1 = require("@nestjs/common");
const structured_logger_1 = require("../logging/structured-logger");
let RequestLoggerMiddleware = class RequestLoggerMiddleware {
    use(req, res, next) {
        const { method, originalUrl } = req;
        const origin = req.headers.origin ?? null;
        const start = Date.now();
        res.on('finish', () => {
            const ms = Date.now() - start;
            const level = res.statusCode >= 500
                ? 'error'
                : res.statusCode >= 400
                    ? 'warn'
                    : 'log';
            (0, structured_logger_1.logStructured)('HTTP', `${method} ${originalUrl}`, level, {
                statusCode: res.statusCode,
                durationMs: ms,
                origin,
                method,
                path: originalUrl,
            });
        });
        if (method === 'OPTIONS') {
            (0, structured_logger_1.logStructured)('HTTP', `Preflight ${originalUrl}`, 'debug', { origin });
        }
        next();
    }
};
exports.RequestLoggerMiddleware = RequestLoggerMiddleware;
exports.RequestLoggerMiddleware = RequestLoggerMiddleware = __decorate([
    (0, common_1.Injectable)()
], RequestLoggerMiddleware);
//# sourceMappingURL=request-logger.middleware.js.map