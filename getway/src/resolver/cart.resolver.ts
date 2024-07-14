import { Inject, Injectable, Res } from '@nestjs/common';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import {
  CartProductdto,
  CartProductInput,
  CreateCartList,
} from 'src/app.interfaces';
import { CurrentUser } from 'src/auth/auth-user.decorator';
import { CartType } from 'src/entity/entity';

@Resolver()
export class CartResolver {
  constructor(
    @Inject('Store_Controller') private store: ClientProxy,
    @Inject('Client_Controller') private user: ClientProxy,
  ) {}

  @Mutation(() => CartType)
  async createCart(@CurrentUser('id') id: string) {
    const cart = await firstValueFrom(
      this.store.send({ cmd: 'createCart' }, id),
    );
    if (id) {
      const Response = await firstValueFrom(
        this.user.send({ cmd: 'updateUser' }, { id, cartId: cart.id }),
      );
    }
    return cart;
  }
  @Mutation(() => Boolean)
  async addToCart(@Args('cartProduct') cartProduct: CartProductInput) {
    const cart = await firstValueFrom(
      this.store.send({ cmd: 'addToCart' }, cartProduct),
    );

    return cart;
  }

  @Query(() => CartType)
  async findCart(@Args('cartId') cartId: string) {
    const cart = await firstValueFrom(
      this.store.send({ cmd: 'findOneCart' }, cartId),
    );

    return cart;
  }

  @Mutation(() => Boolean)
  async deleteCart(@Args('cartId') cartId: string) {
    const Response = await firstValueFrom(
      this.user.send({ cmd: 'removeCart' }, cartId),
    );

    return Response;
  }
}
