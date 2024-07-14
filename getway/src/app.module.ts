import { ApolloDriverConfig } from '@nestjs/apollo';
import { ApolloDriver } from '@nestjs/apollo/dist/drivers';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { AppResolver } from './resolver/app.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { StoreResolver } from './resolver/store.resolver';
import { CartResolver } from './resolver/cart.resolver';
import { CategoryResolver } from './resolver/category.resolver';
import { ProcessResolver } from './resolver/buyProcess.resolver';
import { AuthModule } from './auth/auth.module';
import { GqlConfigService } from './graphql/graphql-provider';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useClass: GqlConfigService,
      imports: [
        ClientsModule.register([
          {
            name: 'Client_Controller',
            transport: Transport.TCP,
            options: {
              port: 3001,
            },
          },
        ]),
      ],
    }),
    ClientsModule.register([
      {
        name: 'Client_Controller',
        transport: Transport.TCP,
        options: {
          port: 3001,
        },
      },
    ]),
    ClientsModule.register([
      {
        name: 'Store_Controller',
        transport: Transport.TCP,
        options: {
          port: 3002,
        },
      },
    ]),
    AuthModule,
  ],
  providers: [ 
    AppService,
    StoreResolver,
    CategoryResolver,
    AppResolver,
    CartResolver,
    // ProcessResolver,
  ],
})
export class AppModule {}
