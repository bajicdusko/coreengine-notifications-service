import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class EmailConfigSchema {
  @IsString()
  @IsNotEmpty()
  readonly service: string;

  @IsString()
  @IsNotEmpty()
  readonly user: string;

  @IsString()
  @IsNotEmpty()
  readonly pass: string;

  @IsString()
  @IsOptional()
  readonly from?: string;
}

export interface EmailConfig extends EmailConfigSchema {}