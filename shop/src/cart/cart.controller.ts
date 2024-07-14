import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { BuyProcessService } from '../buyPeocess/buy-process.service';
import { CartService } from './cart.service';
import { AddToCartDto } from './dto/create-cart.dto';
import { DeleteCartDto } from './dto/delete-cart';
import { UpdateCartDto } from './dto/update-cart.dto';

@Controller()
export class CartController {
  constructor(
    private readonly cartService: CartService,
    private readonly buyService: BuyProcessService,
  ) {}

  @MessagePattern({ cmd: 'createCart' })
  create(@Payload() userId: string) {
    return this.cartService.createCart(userId);
  }

  @MessagePattern({ cmd: 'addToCart' })
  addToCart(@Payload() input: [AddToCartDto]) {
    return this.cartService.addToCart(input['cartProducts']);
  }

  @MessagePattern({ cmd: 'findOneCart' })
  findOne(@Payload() cartId: string) {
    return this.cartService.findUniqe(cartId);
  }
  @MessagePattern({ cmd: 'updateCart' })
  update(@Payload() updateCartDto: UpdateCartDto) {
    return this.cartService.update(updateCartDto);
  }

  @MessagePattern({ cmd: 'removeCart' })
  removeCart(@Payload() id: string) {
    return this.cartService.removeCart(id);
  }

  @MessagePattern({ cmd: 'removeProductCart' })
  removeProductCart(@Payload() input: DeleteCartDto) {
    return this.cartService.removeProduct(input.cartId, input.ProductId);
  }
}
