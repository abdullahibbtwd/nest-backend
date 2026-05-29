"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const app_setup_1 = require("./app.setup");
async function bootstrap() {
    const logger = new common_1.Logger('Bootstrap');
    try {
        const app = await core_1.NestFactory.create(app_module_1.AppModule, {
            logger: ['error', 'warn', 'log', 'debug'],
        });
        (0, app_setup_1.configureApp)(app);
        const port = Number(process.env.PORT) || 3000;
        await app.listen(port, '0.0.0.0');
        logger.log(`Listening on http://0.0.0.0:${port}`);
    }
    catch (err) {
        logger.error('Failed to start application', err);
        process.exit(1);
    }
}
bootstrap().catch((err) => {
    console.error('Bootstrap fatal:', err);
    process.exit(1);
});
//# sourceMappingURL=main.js.map