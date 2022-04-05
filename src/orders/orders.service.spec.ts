import { Test, TestingModule } from '@nestjs/testing';
import { OrdersService } from './orders.service';
import { ApiService } from "../api/api.service";

class ApiServiceMock {
  getOrdersByUserId(_userId){
    return [
      {
      Id: "1a2b3c4d5e00",
      Date: "2022-04-04 12:00:00",
      Status: "delivered",
      Price:50,
      },
      {
        Id: "1a2b3c4d5e12",
        Date: "2022-01-04 12:00:00",
        Status: "delivered",
        Price:50,
      },
      {
        Id: "1a2b3c4d5e13",
        Date: "2022-02-04 12:00:00",
        Status: "delivered",
        Price:200,
      }]
  }
}

describe('OrdersService', () => {
  let ordersService: OrdersService;

  beforeEach(async () => {
    const ApiServiceProvider = {
      provide: ApiService,
      useClass: ApiServiceMock,
    };
    const module: TestingModule = await  Test.createTestingModule({
      providers: [OrdersService, ApiServiceProvider],
    }).compile();

    ordersService = module.get<OrdersService>(OrdersService);
  });

  it("OrdersService should be defined.", async () => {
    expect(ordersService).toBeDefined();
  });

  describe('getDiscount', () => {
    it("should get discount value", async () => {
      const expectedDiscountValue = 15;
      const  discountValue = await  ordersService.getDiscount('680d7766-f402-4206-b102-6283de338aac');
      expect(discountValue).toEqual(expectedDiscountValue);
    });
  })
});
