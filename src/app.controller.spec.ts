import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrdersService } from "./orders/orders.service";

describe('AppController', () => {
  let appController: AppController;
  let testService: OrdersService;

  beforeEach(async () => {
    const ApiServiceProvider = {
      provide: OrdersService,
      useFactory: () => ({
        getDiscount: jest.fn(() => 15),
      }),
    };

    const app: TestingModule = await  Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService, ApiServiceProvider],
    }).compile();

    appController = app.get<AppController>(AppController);
    testService = app.get<OrdersService>(OrdersService);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });

  describe('getDiscount', () => {
    it("should get discount value for user", async () => {

      const userId = '680d7766-f402-4206-b102-6283de338aac'
      expect(testService.getDiscount(userId)).toBe(15);
    });
  });
});
