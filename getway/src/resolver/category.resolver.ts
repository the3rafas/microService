import { Inject, Injectable, UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { ClientProxy } from '@nestjs/microservices';
import { CreateCategoryDto, UpdateCategoryDto } from 'src/app.interfaces';
import { IslogedIn } from 'src/auth/valid-user-guard';
import { CategoryType } from 'src/entity/entity';
@UseGuards(IslogedIn)
@Resolver()
export class CategoryResolver {
  constructor(@Inject('Store_Controller') private user: ClientProxy) {}

  @Mutation(() => CategoryType)
  async createCategory(
    @Args('createCategory') createCategory: CreateCategoryDto,
  ) {
    return this.user.send({ cmd: 'createCategory' }, createCategory);
  }

  @Query(() => [CategoryType])
  async GetAllCategories() {
    return this.user.send({ cmd: 'findAllCategories' }, {});
  }

  @Mutation(() => CategoryType)
  async updateCategory(
    @Args('createCategory') createCategory: UpdateCategoryDto,
  ) {
    return this.user.send({ cmd: 'updateCategory' }, createCategory);
  }
}
