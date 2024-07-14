import { Module } from '@nestjs/common';
import { BuyProcessService } from '../buyPeocess/buy-process.service';
import { ProcessController } from './buy-process.controller';

@Module({
  controllers: [ProcessController],
  providers: [BuyProcessService],
})
export class ProcessModule {}
