import { Injectable } from '@nestjs/common';
import { Cart, PrismaClient } from '@prisma/client';
import { AddToCartDto } from './dto/create-cart.dto';
import { DeleteCartDto } from './dto/delete-cart';
import { UpdateCartDto } from './dto/update-cart.dto';
const Prisma = new PrismaClient();

@Injectable()
export class CartService {
  async createCart(userId: string) {
    return await Prisma.cart.create({
      data: {
        ...(userId && { userId }),
      },
    });

    // await data['input'].forEach(async (e: Cart) => {

    // let element: Cart = await this.findUniqe(e.userId, e.ProductId);

    //   if (element) {
    //     await Prisma.cart.update({
    //       where: {
    //         id: element.id,
    //       },
    //       data: {
    //         amount: e.amount,
    //       },
    //     });
    //   } else {
    //
    //     return cart;
    //   }
    // });

    return true;
  }

  async addToCart(data: [AddToCartDto]) {
    const cartProducts = await Prisma.cartProduct.findMany({
      where: { ProductId: { in: data.map((e) => e.ProductId) } },
    });

    data.forEach(async (e) => {
      const element = cartProducts.filter(
        (x) => x.ProductId === e.ProductId && x.cartId === e.cartId,
      );

      if (element.length) {
        await Prisma.cartProduct.update({
          where: {
            cartId_ProductId: {
              cartId: e.cartId,
              ProductId: e.ProductId,
            },
          },
          data: {
            amount: e.amount,
          },
        });
      } else {
        await Prisma.cartProduct.create({
          data: e,
        });
      }
    });

    const allProduct = await Prisma.cartProduct.findMany({
      where: { cartId: data[0].cartId },
    });
    const cost = allProduct
      .map((r) => r.cost)
      .reduce((final, current) => final + current, 0);
    console.log(cost);

    await Prisma.cart.update({
      where: { id: data[0].cartId },
      data: {
        cost,
      },
    });

    return true;
  }
  async findUniqe(id: string) {
    const cart = await Prisma.cart.findUnique({
      where: {
        id,
      },
      include: {
        Products: true,
      },
    });
    return cart;
  }
  async findOne(userId: string) {
    const cart = await Prisma.cart.findMany({
      where: {
        userId,
      },
    });
    if (cart) throw new Error('mfeeeesh');
    return cart;
  }

  async update(updateCartDto: UpdateCartDto) {
    const { ProductId, userId, amount } = updateCartDto;
    // const cart = await Prisma.cart.update({
    //   where: {
    //     userId_ProductId: {
    //       ProductId,
    //       userId,
    //     },
    //   },
    //   data: {
    //     amount,
    //   },
    // });
    // return cart;
  }
  async removeProduct(cartId: string, ProductId: string) {
    const cartProduct = await Prisma.cartProduct.findUnique({
      where: {
        cartId_ProductId: {
          cartId,
          ProductId,
        },
      },
      include: {
        cart: true,
      },
    });
    if (cartProduct) {
      await Prisma.cartProduct.delete({
        where: {
          cartId_ProductId: {
            cartId,
            ProductId,
          },
        },
      });

      await Prisma.cart.update({
        where: { id: cartId },
        data: {
          cost: cartProduct.cart.cost - cartProduct.cost,
        },
      });
    }

    return true;
  }
  async removeCart(id: string) {
    await Prisma.cart.delete({
      where: {
        id,
      },
    });
    return true;
  }
}
