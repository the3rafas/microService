import { Module } from '@nestjs/common';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { SecuretyGroupModule } from './securety-group/securety-group.module';
import { PaymentModule } from './payment/payment.module';

@Module({
  imports: [UserModule, SecuretyGroupModule, PaymentModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
