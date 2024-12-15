import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as admin from 'firebase-admin';
import { SendPushDto } from '@push/dto/send-push.dto';
import { PushConfig } from '@push/config/push.config';
import { PushErrorService } from '@push/services/push-error.service';

@Injectable()
export class PushService implements OnModuleInit, OnModuleDestroy {
  private firebaseApp: admin.app.App;

  constructor(
    private configService: ConfigService,
    private readonly pushErrorService: PushErrorService
  ) {}

  async onModuleInit() {
    try {
      const pushConfig = this.configService.get<PushConfig>('push');

      if (!pushConfig?.projectId || !pushConfig?.privateKey || !pushConfig?.clientEmail) {
        throw new Error('Push configuration is missing required credentials');
      }

      this.firebaseApp = admin.initializeApp({
        credential: admin.credential.cert({
          projectId: pushConfig.projectId,
          privateKey: pushConfig.privateKey,
          clientEmail: pushConfig.clientEmail,
        }),
      });
    } catch (error) {
      this.pushErrorService.handleError(error, 'initialization');
    }
  }

  async onModuleDestroy() {
    if (this.firebaseApp) {
      await this.firebaseApp.delete();
    }
  }

  async sendPush(pushDto: SendPushDto) {
    try {
      const message: admin.messaging.Message = {
        token: pushDto.token,
        notification: {
          title: pushDto.title,
          body: pushDto.body,
        },
        data: pushDto.data,
      };

      const response = await this.firebaseApp.messaging().send(message);

      return {
        status: 'success',
        messageId: response,
      };
    } catch (error) {
      this.pushErrorService.handleError(error, 'sendPush');
      throw error;
    }
  }
}
