import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { UserType } from 'src/entity/entity';
import { CreateAuthInput } from './dto/create-auth.input';
import { UpdateAuthInput } from './dto/update-auth.input';
import * as jwt from 'jsonwebtoken';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class AuthService {
  constructor(@Inject('Client_Controller') private user: ClientProxy) {}

  async logIN(logInfo: CreateAuthInput) {
    const user: UserType = await firstValueFrom(
      this.user.send({ cmd: 'findOneUser' }, 'ahmed'),
    );

    if (logInfo.password === user.password) {
      return {
        tocken: jwt.sign({ userId: user.id }, "this.config.get('JWT_SECRET')"),
        user,
      };
    } else {
      throw new UnauthorizedException('hahahahahha');
    }
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthInput: UpdateAuthInput) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
