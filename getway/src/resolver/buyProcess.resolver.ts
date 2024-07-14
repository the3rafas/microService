import { Inject, Injectable, Res } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
// import { ProcessCartdto } from 'src/app.interfaces';
import { CartType } from 'src/entity/entity';

@Resolver()
export class ProcessResolver {
  constructor(
    @Inject('Store_Controller') private storeClient: ClientProxy,
    @Inject('Client_Controller') private userClient: ClientProxy,
  ) {}
  // createPayment
//   @Mutation(() => Boolean)
//   async buyProcess(@Args('userId') input: ProcessCartdto) {
//     const order = await firstValueFrom(
//       this.storeClient.send({ cmd: 'addOrder' }, 'userId'),
//     );
//     const Paymentprocess = await firstValueFrom(
//       this.userClient.send(
//         { cmd: 'createPayment' },
//         { orderId: order.id, ...input },
//       ),
//     );

//     if (Paymentprocess.status === 'succeeded') {
//       const productProcess = await firstValueFrom(
//         this.storeClient.send({ cmd: 'buyPrfindProcessoduct' }, 'userId'),
//       );
//       return true;
//     }
//   }
}
