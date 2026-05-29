export declare function normalizeOrigin(origin: string): string;
export interface CorsSettings {
    strict: boolean;
    allowed: string[];
}
export declare function getCorsSettings(): CorsSettings;
export declare function createCorsOriginValidator(settings: CorsSettings): (origin: string | undefined, callback: (err: Error | null, allow?: boolean) => void) => void;
