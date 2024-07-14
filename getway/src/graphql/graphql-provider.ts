import { ApolloDriverConfig } from '@nestjs/apollo';
import { Inject, Injectable } from '@nestjs/common';
import { GqlOptionsFactory } from '@nestjs/graphql';
import { ClientProxy } from '@nestjs/microservices';
import * as jwt from 'jsonwebtoken';
import { Request } from 'express';
import { UserType } from 'src/entity/entity';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class GqlConfigService implements GqlOptionsFactory {
  constructor(@Inject('Client_Controller') private user: ClientProxy) {}
  createGqlOptions(): ApolloDriverConfig {
    return {
      playground: true,
      introspection: true,
      autoSchemaFile: true,
      cache: 'bounded',
      persistedQueries: false,
      csrfPrevention: true,
      // installSubscriptionHandlers: true,
      context: async ({ req, extra }) => {
        let currentUser: UserType;

        // Auth for subscription connections

        const getAuthToken = (req: Request): string => {
          if (
            req &&
            req.headers &&
            (req.headers.authorization || req.headers.Authorization)
          ) {
            let auth: string;
            if (req.headers.authorization) auth = req.headers.authorization;
            if (req.headers.Authorization)
              auth = <string>req.headers.Authorization;

            return auth.split(' ')[1];
          }
          return null;
        };
        const getUserFromReqHeaders = async (
          req: Request,
        ): Promise<UserType> => {
          let token = getAuthToken(req);

          if (!token) return null;
          let { userId } = <any>(
            jwt.verify(token, "this.config.get('JWT_SECRET')")
          );

          const user: UserType = await firstValueFrom(
            this.user.send({ cmd: 'findUniqueUser' }, userId),
          );

          return user ? (user as UserType) : null;
        };
        if (extra && extra.currentUser) currentUser = extra.currentUser;
        else currentUser = await getUserFromReqHeaders(<Request>req);
        // Get lang and   country (if exist)

        return {
          req,
          currentUser,
        };
      },
    };
  }
}
