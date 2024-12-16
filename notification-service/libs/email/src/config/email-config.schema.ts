import { IsString, IsNotEmpty, IsOptional, IsNumber, IsBoolean } from 'class-validator';

export class EmailConfigSchema {
  @IsString()
  @IsNotEmpty()
  readonly host: string;

  @IsNumber()
  @IsOptional()
  readonly port?: number = 587;

  @IsBoolean()
  @IsOptional()
  readonly secure?: boolean = false;

  @IsString()
  @IsNotEmpty()
  readonly user: string;

  @IsString()
  @IsNotEmpty()
  readonly password: string;

  @IsString()
  @IsOptional()
  readonly from?: string;
}

export interface EmailConfig extends EmailConfigSchema {}