import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
const Prisma = new PrismaClient();

@Injectable()
export class UserService {
  constructor() {}

  async create(data: CreateUserDto) {
    return await Prisma.user.create({
      data,
    });
  }
 
  async findAll() {
    return await Prisma.user.findMany();
  }
  async findUnique(id: string) {
    return await Prisma.user.findUnique({
      where: { id },
    });
  }

  async findOne(userName: string) {
    return await Prisma.user.findFirst({
      where: { userName },
    });
  }    

  async update(update: UpdateUserDto) { 
    const { id, userCase, ...data } = update;

    return await Prisma.user.update({
      where: { id },
      data, 
    });
  }

  async remove(id: string) {
    return await Prisma.user.delete({
      where: { id },
    });
  }
}
