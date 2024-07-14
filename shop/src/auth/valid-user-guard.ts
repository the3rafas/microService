import {
  CanActivate,
  ExecutionContext,
  Injectable,
  BadGatewayException,
} from '@nestjs/common';
// import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class IslogedIn implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = context.getArgs()[0];
    const { user } = ctx;

    console.log(user);

    if (!user) throw new BadGatewayException('lol stupid');

    return true;
  }
}
