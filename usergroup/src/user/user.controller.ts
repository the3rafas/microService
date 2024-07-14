import { Controller } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  TcpContext,
} from '@nestjs/microservices';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @MessagePattern({ cmd: 'createUser' })
  create(@Payload() createUserDto: CreateUserDto, @Ctx() ctx: TcpContext) {
    console.log(ctx);

    return this.userService.create(createUserDto);
  }

  @MessagePattern({ cmd: 'findAllUser' })
  findAll() {
    return this.userService.findAll();
  }

  @MessagePattern({ cmd: 'findOneUser' })
  findOne(@Payload() userName: string) {
    return this.userService.findOne(userName);
  }

  @MessagePattern({ cmd: 'findUniqueUser' })
  findUnique(@Payload() id: string) {
    return this.userService.findUnique(id);
  }

  @MessagePattern({ cmd: 'updateUser' })
  update(@Payload() updateUserDto: UpdateUserDto) {
    return this.userService.update(updateUserDto);
  }

  @MessagePattern({ cmd: 'removeUser' })
  remove(@Payload() id: string) {
    return this.userService.remove(id);
  }
}
