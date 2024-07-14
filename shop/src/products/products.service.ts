import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { BuyProductDto } from '../buyPeocess/dto/buy-product.dto';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
const Prisma = new PrismaClient();

@Injectable()
export class ProductsService {
  async create(input: CreateProductDto, storeId: string) {
    const { categoryName, ...data } = input;

    const category = await Prisma.category.findUnique({
      where: {
        name: categoryName,
      },
    });
    return await Prisma.products.create({
      data: {
        ...data,
        CategoryId: category.id,
        storeId,
      },
    });
  }
  async findAll() {
    const product = await Prisma.products.findMany({});
    if (!product) {
      throw new Error('no product');
    }
    return product;
  }
  async findOne(id: string) {
    const product = await Prisma.products.findUnique({
      where: {
        id,
      },
    });
    if (!product) {
      throw new Error('no product');
    }
    return product;
  }

  async update(input: UpdateProductDto) {
    const { id, ...data } = input;

    return await Prisma.products.update({
      where: {
        id,
      },
      data,
    });
  }

  async remove(id: string) {
    await Prisma.products.delete({
      where: {
        id,
      },
    });

    return true;
  }
}
