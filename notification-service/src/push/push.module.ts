import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PushService } from './push.service';
import { PushController } from './push.controller';
import { PushErrorService } from './services/push-error.service';
import pushConfig from './config/push.config';
import { validateConfig } from '@shared/config/config.validator';
import { PushConfigSchema } from './config/push-config.schema';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forFeature(pushConfig),
    ConfigModule.forRoot({
      envFilePath: join(__dirname, 'config', 'env', '.env.push'),
      validate: (config) => validateConfig(config, PushConfigSchema),
      validationOptions: {
        allowUnknown: true,
        abortEarly: true,
      },
    }),
  ],
  controllers: [PushController],
  providers: [PushService, PushErrorService],
  exports: [PushService],
})
export class PushModule {}
