import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateSecuretyGroupDto } from './dto/create-securety-group.dto';
import { UpdateSecuretyGroupDto } from './dto/update-securety-group.dto';
const Prisma = new PrismaClient();

@Injectable()
export class SecuretyGroupService {
  async create(data: CreateSecuretyGroupDto) {
    return await Prisma.securityGroup.create({ data });
  }

  async findAll() {
    return await Prisma.securityGroup.findMany({
      include: {
        user: true,
      },
    });
  }

  async findOne(id: string) {
    return await Prisma.securityGroup.findUnique({
      where: {
        id,
      },
    });
  }

  async update(updateSecuretyGroupDto: UpdateSecuretyGroupDto) { 
    const { id, ...data } = updateSecuretyGroupDto;
    return await Prisma.securityGroup.update({
      where: {
        id,
      },
      data,
    });
  }
  async asigiUserToGroup(userId: string, securityGroupId: string) {
    return (
      (await this.findOne(securityGroupId)) &&
      (await Prisma.user.findUnique({ where: { id: userId } })) &&
      (await Prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          securityGroupId,
        },
      }))
    );
  }

  async unasigiUserToGroup(userId: string, securityGroupId: string) {
    return (
      (await this.findOne(securityGroupId)) &&
      (await Prisma.user.findUnique({ where: { id: userId } })) &&
      (await Prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          securityGroupId: null,
        },
      }))
    );
  }

  remove(id: number) {
    return `This action removes a #${id} securetyGroup`;
  }
}
