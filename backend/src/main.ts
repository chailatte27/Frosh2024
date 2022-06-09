import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
const cors = require('cors');
const corsOption = {
  origin: ['http://localhost:3000'],
};
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cors(corsOption));
  await app.listen(4000);
}
bootstrap();
