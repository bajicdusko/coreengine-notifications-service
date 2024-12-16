import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EmailService } from './email.service';
import { EmailController } from './email.controller';
import { EmailErrorService } from './services/email-error.service';
import emailConfig from './config/email.config';
import { validateConfig } from '@notification/shared';
import { EmailConfigSchema } from './config/email-config.schema';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forFeature(emailConfig),
    ConfigModule.forRoot({
      envFilePath: join(__dirname, 'config', 'env', '.env.email'),
      validate: (config) => validateConfig(config, EmailConfigSchema),
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),
  ],
  controllers: [EmailController],
  providers: [EmailService, EmailErrorService],
  exports: [EmailService],
})
export class EmailModule {}
