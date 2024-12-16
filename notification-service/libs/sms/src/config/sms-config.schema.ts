import { IsString, IsNotEmpty } from 'class-validator';

export class SmsConfigSchema {
  @IsString()
  @IsNotEmpty()
  readonly accountSid: string;

  @IsString()
  @IsNotEmpty()
  readonly authToken: string;

  @IsString()
  @IsNotEmpty()
  readonly fromNumber: string;
}

export interface SmsConfig extends SmsConfigSchema {}