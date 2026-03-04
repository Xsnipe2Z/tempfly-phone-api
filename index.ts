// TempFly Phone API - initial setup

export interface HealthResponse {
  status: 'ok';
  service: string;
  timestamp: string;
}

export function healthCheck(): HealthResponse {
  return {
    status: 'ok',
    service: 'tempfly-phone-api',
    timestamp: new Date().toISOString(),
  };
}
