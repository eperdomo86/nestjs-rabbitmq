import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqps://tjlykkeu:4bRMnb7g5T-wNJZBH9kykVcc-xdWYCHJ@dingo.rmq.cloudamqp.com/tjlykkeu'],
      queue: 'main_queue',
      queueOption: {
        durable: true
      },
    },
  });
  app.listen().then(() => {
    console.log('Microservice is listening');
  });
}
bootstrap();