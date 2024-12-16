import { registerAs } from '@nestjs/config';

export default registerAs('email', () => ({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || '587', 10),
  secure: process.env.EMAIL_SECURE === 'true',
  user: process.env.EMAIL_SERVICE_USER,
  password: process.env.EMAIL_SERVICE_PASS,
  from: process.env.EMAIL_FROM || process.env.EMAIL_SERVICE_USER,
}));

export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  user: string;
  password: string;
  from: string;
}