import { registerAs } from '@nestjs/config';

export default registerAs('push', () => ({
  projectId: process.env.FIREBASE_PROJECT_ID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
}));

export interface PushConfig {
  projectId: string;
  privateKey: string;
  clientEmail: string;
} 