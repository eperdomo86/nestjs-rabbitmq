import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './product.controller';
import { Product } from './product.entity';
import { ProductService } from './product.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    TypeOrmModule.forFeature([Product]),
    ClientsModule.register([
      {
        name: 'PRODUCT_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqps://tjlykkeu:4bRMnb7g5T-wNJZBH9kykVcc-xdWYCHJ@dingo.rmq.cloudamqp.com/tjlykkeu'],
          queue: 'main_queue',
          queueOptions: {
            durable: true
          },
        },
      },
    ]),
  ],
  controllers: [ProductController],
  providers: [ProductService]
})
export class ProductModule {}
