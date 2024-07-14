import { Injectable } from '@nestjs/common';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PrismaClient } from '@prisma/client';
import { Stripe } from 'stripe';
import { paymentRequestBody } from './dto/acreate-payment.dto';
const prisma = new PrismaClient();
@Injectable()
export class PaymentService {
  private stripe: Stripe = new Stripe(process.env.API_SECRET_KEY, {
    apiVersion: '2022-11-15',
  });

  constructor() {}
  // async createPayment(paymentRequestBody: paymentRequestBody): Promise<any> {
  //   const { orderId, userId } = paymentRequestBody;
  //   try {
  //     const stripeInfo = await this.stripe.paymentIntents.create({
  //       amount: paymentRequestBody.cost * 100,
  //       currency: paymentRequestBody.currency,
  //       metadata: { userId, orderId },
  //     });
  //     return await this.addPaymentTransport(stripeInfo);
  //   } catch (error) {
  //     throw error;
  //   }
  // }
  // private async addPaymentTransport(
  //   stripeInfo: Stripe.Response<Stripe.PaymentIntent>,
  // ) {
  //   return await prisma.paymentTransaction.create({
  //     data: {
  //       cost: stripeInfo.amount,
  //       productIds: stripeInfo.metadata.orderId,
  //       status: stripeInfo.status,
  //       userId: stripeInfo.metadata.userId,
  //     },
  //   });
  // }

  // findAll() {
  //   return `This action returns all payment`;
  // }

  // async findOne(userId: string) {
  //   return await prisma.payment.findUnique({
  //     where: {
  //       userId,
  //     },
  //   });
  // }
  // async update(userId: string, data: UpdatePaymentDto) {
  //   return await prisma.payment.update({
  //     where: {
  //       userId,
  //     },
  //     data: { ...data },
  //   });
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} payment`;
  // }
}
