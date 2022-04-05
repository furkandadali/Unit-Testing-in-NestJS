import {  Injectable } from "@nestjs/common";
import { ApiService } from "../api/api.service";
import { OrderDetails} from "../types";

@Injectable()
export class OrdersService {
  constructor(private apiService: ApiService) {}

  public async getDiscount(userId: string): Promise<number> {
    const orders: OrderDetails[] = await this.apiService.getOrdersByUserId(userId);
    let discountLimit = 0;
    if(orders){
      orders.forEach((lineItem) => {
        if (lineItem.Price >= 50){
          discountLimit += lineItem.Price * (5/100);
        }
      })
    }
    return discountLimit >= 20 ? 20 : discountLimit ;
  }
}
