export type LogLevel = 'log' | 'warn' | 'error' | 'debug';
export interface StructuredLogPayload {
    level: LogLevel;
    context: string;
    message: string;
    timestamp: string;
    [key: string]: unknown;
}
export declare function logStructured(context: string, message: string, level?: LogLevel, meta?: Record<string, unknown>): void;
