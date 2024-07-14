import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { Cart } from '@prisma/client';
import { BuyProcessService } from '../buyPeocess/buy-process.service';

@Controller()
export class ProcessController {
  constructor(
    private readonly cartService: BuyProcessService,
    private readonly buyService: BuyProcessService,
  ) {}

  // @MessagePattern({ cmd: 'buyProduct' })
  // buy(@Payload() userId: string) {
  //   return this.buyService.buyProcess('12');
  // }

  // @MessagePattern({ cmd: 'findProcess' })
  // async getCost(@Payload() userId: string) {
  //   return await this.buyService.cost('12');
  // }

  // @MessagePattern({ cmd: 'addOrder' })
  // async addOrder(@Payload() userId: string) {
  //   return await this.buyService.addOrder('12');
  // }
}
