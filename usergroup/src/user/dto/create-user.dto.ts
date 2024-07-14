import { UserCase } from '@prisma/client';
import { CreatePaymentDto } from 'src/payment/dto/create-payment.dto';

export class CreateUserDto {
  userName: string;
  email: string;
  password: string;
  userCase: UserCase;
}
