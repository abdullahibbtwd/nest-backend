"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logStructured = logStructured;
const common_1 = require("@nestjs/common");
function logStructured(context, message, level = 'log', meta) {
    const payload = {
        level,
        context,
        message,
        timestamp: new Date().toISOString(),
        ...meta,
    };
    const line = JSON.stringify(payload);
    const logger = new common_1.Logger(context);
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
//# sourceMappingURL=structured-logger.js.map