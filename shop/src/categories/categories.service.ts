import { BadGatewayException, Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
const Prisma = new PrismaClient();

@Injectable()
export class CategoriesService {
  async create(data: CreateCategoryDto) {
    if (await this.findOne(data.name)) {
      throw new BadGatewayException('mawgooooood');
    }
    return await Prisma.category.create({
      data,
    });
  }

  async findAll() {
    const category = await Prisma.category.findMany({});
    return category;
  }

  async findOne(name: string) {
    return await Prisma.category.findUnique({
      where: {
        name,
      },
    });
  }

  async update(updateCategoryDto: UpdateCategoryDto) {
    const { existName, ...data } = updateCategoryDto;
    const category = await Prisma.category.update({
      where: { name: existName },
      data,
    });
    return category;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
