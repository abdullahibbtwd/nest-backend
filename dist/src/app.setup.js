"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureApp = configureApp;
const common_1 = require("@nestjs/common");
const cors_config_1 = require("./common/cors.config");
const http_exception_filter_1 = require("./common/filters/http-exception.filter");
function configureApp(app) {
    const logger = new common_1.Logger('Bootstrap');
    const corsSettings = (0, cors_config_1.getCorsSettings)();
    app.setGlobalPrefix('api');
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, transform: true }));
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.enableCors({
        origin: (0, cors_config_1.createCorsOriginValidator)(corsSettings),
        credentials: true,
        methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization', 'Accept'],
        exposedHeaders: ['Content-Length'],
        maxAge: 86400,
    });
    logger.log(`API prefix: /api`);
    logger.log(`Health: GET /api/health`);
    logger.log(`FRONTEND_URL: ${process.env.FRONTEND_URL ?? '(not set — CORS permissive)'}`);
    logger.log(`NODE_ENV: ${process.env.NODE_ENV ?? 'development'}`);
    logger.log(`PORT: ${process.env.PORT ?? 3000}`);
}
//# sourceMappingURL=app.setup.js.map