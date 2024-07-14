import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
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
  providers: [AuthResolver, AuthService],
})
export class AuthModule {}
