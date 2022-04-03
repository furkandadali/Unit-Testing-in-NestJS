import { Injectable } from '@nestjs/common';
import { OrderDetails } from "../types";
import  axios  from 'axios';

@Injectable()
export class ApiService {

  async getOrdersByUserId(userId: string): Promise<OrderDetails[]>{
    const url = `../get-orders?userId = ${userId}`;
    const response = await axios.get<OrderDetails[]>(url,{ headers: {
      Accept: 'application/json',
      },
    },
      );
    return response.data;
  }
}
