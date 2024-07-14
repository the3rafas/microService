import { Injectable } from '@nestjs/common';
import { Cart, PrismaClient } from '@prisma/client';
import { Product } from 'src/products/entities/product.entity';

const Prisma = new PrismaClient();

@Injectable()
export class BuyProcessService {
  // private async findCart(userId: string) {
  //   const cart: any[] = await Prisma.cart.findMany({
  //     where: {
  //       userId,
  //     },
  //     include: {
  //       Product: true,
  //     },
  //   });
  //   return cart;
  // }
  // private async validate(userId: string): Promise<any[]> {
  //   const cart: any[] = await this.findCart(userId);
  //   const validProducts = cart.filter((e) => e.amount < e.Product.amount);

  //   if (validProducts.length !== cart.length) {
  //     throw new Error('A7aaaaaaa feeeh product 5lsaaan ');
  //   }
  //   return validProducts;
  // }

  // async cost(userId: string) {
  //   const cart: any[] = await this.validate(userId);
  //   cart.map((e) => e.amount * e.price);

  //   const cost = cart.reduce(
  //     (accumulator, currentValue) => accumulator + currentValue,
  //     0,
  //   );
  //   return cost;
  // }
  // async addOrder(userId: string) {
  //   // const cart: any[] = await this.validate(userId);
  //   // const ids = cart.map((e: Cart) => e.ProductId);
  //   // cart.map((e) => e.amount * e.e.Product.price);

  //   // return await Prisma.order.create({
  //   //   data: {
  //   //     userId,
  //   //     cost: await this.cost(userId),
  //   //     ProductId: ids,
  //   //   },
  //   // });
  // }
  // async buyProcess(userId: string) {
  //   const validProducts = await this.validate(userId);
  //   validProducts.forEach(
  //     async (e) =>
  //       await Prisma.products.update({
  //         where: {
  //           id: e.ProductId,
  //         },
  //         data: {
  //           amount: e.Product.amount - e.amount,
  //         },
  //       }),
  //   );

  //   await Prisma.cart.deleteMany({
  //     where: {
  //       userId,
  //     },
  //   });
  //   return true;
  // }
}
