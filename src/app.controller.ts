import { Controller,HttpException, Get, Query } from "@nestjs/common";
import { AppService } from './app.service';
import { OrdersService } from "./orders/orders.service";

@Controller('orders')
export class AppController {
  constructor(private readonly appService: AppService,
              private readonly orderService: OrdersService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/discount')
  async getDiscount(
    @Query('userId') userId: string
  ): Promise<number> {
    if(!userId){
      throw new HttpException('UserId value is empty.',400)
    }

    return await this.orderService.getDiscount(userId);
  }
}
