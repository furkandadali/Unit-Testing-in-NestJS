import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiService } from './api/api.service';
import { OrdersService } from './orders/orders.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ApiService, OrdersService],
})
export class AppModule {}
