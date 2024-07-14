import { Inject } from '@nestjs/common';
import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import {
  AssignUserToGroupdto,
  CreatePaymentdto,
  CreateSecuretyGroupDto,
  CreateUserdto,
} from '../app.interfaces';
import { AppService } from '../app.service';
import {
  PermissionsGroups,
  SecuretyGroupType,
  UserType,
} from '../entity/entity';

@Resolver()
export class AppResolver {
  constructor(@Inject('Client_Controller') private user: ClientProxy) {}

  @Mutation(() => UserType)
  async createUser(@Args('createUser') createUserDto: CreateUserdto) {
    return this.user.send({ cmd: 'createUser' }, createUserDto);
  }

  @Mutation(() => UserType)
  async addPayment(@Args('createUser') createPaymentDto: CreatePaymentdto) {
    return this.user.send({ cmd: 'createPayment' }, createPaymentDto);
  }
  @Mutation(() => UserType)
  async assign(@Args('createUser') assginInputDto: AssignUserToGroupdto) {
    return this.user.send({ cmd: 'assignSecuretyGroup' }, assginInputDto);
  }

  @Mutation(() => UserType)
  async unassign(@Args('createUser') assginInputDto: AssignUserToGroupdto) {
    return this.user.send({ cmd: 'unassignSecuretyGroup' }, assginInputDto);
  }

  @Mutation(() => SecuretyGroupType)
  async createSecuretyGroup(
    @Args('createSecuretyGroup') createSecuretyGroupDto: CreateSecuretyGroupDto,
  ) {
    return this.user.send(
      { cmd: 'createSecuretyGroup' },
      createSecuretyGroupDto,
    );
  }

  @Query(() => [PermissionsGroups], { name: 'groupPermission' })
  async groupPermission() {
    const Response = await firstValueFrom(
      this.user.send({ cmd: 'AllgroupPermision' }, {}),
    );

    return Response;
  }
  @Query(() => [String], { name: 'allPermission' })
  async allPermission() {
    const Response = await firstValueFrom(
      this.user.send({ cmd: 'getAllPermision' }, {}),
    );

    return Response;
  }
  @Query(() => [UserType], { name: 'users' })
  async findAllUsers() {
    const Response = await firstValueFrom(
      this.user.send({ cmd: 'findAllUser' }, {}),
    );

    return Response;
  }
  @Query(() => [SecuretyGroupType], { name: 'securetyGroups' })
  async findAllSecuretyGroup() {
    const Response = await firstValueFrom(
      this.user.send({ cmd: 'findAllSecuretyGroup' }, {}),
    );

    return Response;
  }
}
