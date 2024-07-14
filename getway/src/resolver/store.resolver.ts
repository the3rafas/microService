import { Inject, UseGuards } from '@nestjs/common';
import { Resolver, Query, Mutation, Args, Context } from '@nestjs/graphql';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { CurrentUser } from 'src/auth/auth-user.decorator';
import { IslogedIn } from 'src/auth/valid-user-guard';
import {
  AssignUserToGroupdto,
  CreateCartDto,
  CreateProductDto,
  CreateSecuretyGroupDto,
  CreateUserdto,
  UpdateProductDto,
} from '../app.interfaces';
import { AppService } from '../app.service';
import {
  CategoryType,
  PermissionsGroups,
  ProductType,
  SecuretyGroupType,
  UserType,
} from '../entity/entity';

@Resolver()
export class StoreResolver {
  constructor(@Inject('Store_Controller') private user: ClientProxy) {}

  @UseGuards(IslogedIn)
  @Mutation(() => ProductType)
  async createProduct(
    @Args('createproduct') createproduct: CreateProductDto,
    @CurrentUser('id') id: string,
  ) {
    return this.user.send(
      { cmd: 'createProduct' },
      { createproduct, userId: id },
    );
  }

  @Query(() => [ProductType])
  async GetAllProducts() {
    return this.user.send({ cmd: 'findAllProducts' }, {});
  }
  @Query(() => ProductType)
  async GetProduct(@Args('id') id: string) {
    return this.user.send({ cmd: 'findOneProduct' }, id);
  }

  @UseGuards(IslogedIn)
  @Mutation(() => ProductType)
  async updateProduct(@Args('createproduct') updateproduct: UpdateProductDto) {
    return this.user.send({ cmd: 'updateProduct' }, updateproduct);
  }

  @UseGuards(IslogedIn)
  @Mutation(() => Boolean)
  async deleteProduct(@Args('id') id: string) {
    return this.user.send({ cmd: 'removeProduct' }, id);
  }
}
