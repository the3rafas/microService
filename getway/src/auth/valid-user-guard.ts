import {
  CanActivate,
  ExecutionContext,
  Injectable,
  BadGatewayException,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class IslogedIn implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const { currentUser } = ctx.getContext();

    if (!currentUser) throw new BadGatewayException('lol stupid');

    return true;
  }
}
