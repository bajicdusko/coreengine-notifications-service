import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from '@app/app.module';
import { GlobalExceptionFilter } from '@shared/filters/global-exception.filter';
import { ErrorHandlingService } from '@shared/services/error-handling.service';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  const errorHandlingService = app.get(ErrorHandlingService);
  app.useGlobalFilters(new GlobalExceptionFilter(errorHandlingService));
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true,
    exceptionFactory: (errors) => {
      const messages = errors.map(error => ({
        field: error.property,
        message: Object.values(error.constraints || {}).join(', '),
      }));
      return new Error(JSON.stringify(messages));
    },
  }));

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
