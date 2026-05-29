import { Controller, Get } from '@nestjs/common';
import { SkipThrottle } from '@nestjs/throttler';

@SkipThrottle()
@Controller('health')
export class HealthController {
  @Get()
  check() {
    return {
      ok: true,
      service: 'helpdesk-api',
      timestamp: new Date().toISOString(),
    };
  }
}
