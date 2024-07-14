import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';
import { BuyProcessService } from '../buyPeocess/buy-process.service';

@Module({
  controllers: [CartController],
  providers: [CartService, BuyProcessService],
})
export class CartModule {}
