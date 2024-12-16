import { IsString, IsNotEmpty, IsPhoneNumber } from 'class-validator';

export class SendSmsDto {
  @IsPhoneNumber()
  @IsNotEmpty()
  to: string;

  @IsString()
  @IsNotEmpty()
  message: string;
} 