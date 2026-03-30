import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import cookieParser from 'cookie-parser';
import { setupSwagger } from './utils/swagger.utils';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());

  setupSwagger(app);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
