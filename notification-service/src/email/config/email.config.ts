import { registerAs } from '@nestjs/config';

export default registerAs('email', () => ({
  service: process.env.EMAIL_SERVICE || 'gmail',
  user: process.env.EMAIL_SERVICE_USER,
  pass: process.env.EMAIL_SERVICE_PASS,
  from: process.env.EMAIL_FROM || process.env.EMAIL_SERVICE_USER,
}));

export interface EmailConfig {
  service: string;
  user: string;
  pass: string;
  from: string;
} 