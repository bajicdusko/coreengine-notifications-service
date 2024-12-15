import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SmsService } from './sms.service';
import { SmsController } from './sms.controller';
import { SmsErrorService } from './services/sms-error.service';
import smsConfig from './config/sms.config';
import { validateConfig } from '@shared/config/config.validator';
import { SmsConfigSchema } from './config/sms-config.schema';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forFeature(smsConfig),
    ConfigModule.forRoot({
      envFilePath: join(__dirname, 'config', 'env', '.env.sms'),
      validate: (config) => validateConfig(config, SmsConfigSchema),
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),
  ],
  controllers: [SmsController],
  providers: [SmsService, SmsErrorService],
  exports: [SmsService],
})
export class SmsModule {}
