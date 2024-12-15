import { IsString, IsNotEmpty } from 'class-validator';

export class PushConfigSchema {
  @IsString()
  @IsNotEmpty()
  readonly projectId: string;

  @IsString()
  @IsNotEmpty()
  readonly privateKey: string;

  @IsString()
  @IsNotEmpty()
  readonly clientEmail: string;
}

export interface PushConfig extends PushConfigSchema {} 