import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { PaymentService } from './payment.service';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { paymentRequestBody } from './dto/acreate-payment.dto';

@Controller()
export class PaymentController {
  constructor(private readonly paymentService: PaymentService) {}

  // @MessagePattern({ cmd: 'createPayment' })
  // create(@Payload() createPaymentDto: paymentRequestBody) {
  //   return this.paymentService.createPayment(createPaymentDto);
  // }
}
