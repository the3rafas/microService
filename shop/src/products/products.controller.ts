import { Controller, Get } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { ProductsService } from './products.service';
import { CreateProductDto, createProductInput } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { BuyProductDto } from '../buyPeocess/dto/buy-product.dto';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @MessagePattern({ cmd: 'createProduct' })
  createProduct(@Payload() input: createProductInput) {
    return this.productsService.create(input.createproduct, input.userId);
  }

  @MessagePattern({ cmd: 'findAllProducts' })
  findAll() {
    return this.productsService.findAll();
  }

  @MessagePattern({ cmd: 'findOneProduct' })
  findOne(@Payload() id: string) {
    return this.productsService.findOne(id);
  }

  @MessagePattern({ cmd: 'updateProduct' })
  update(@Payload() updateProductDto: UpdateProductDto) {
    return this.productsService.update(updateProductDto);
  }

  @MessagePattern({ cmd: 'removeProduct' })
  remove(@Payload() id: string) {
    return this.productsService.remove(id);
  }

  // @MessagePattern('buyProduct')
  // @Get('/')
  // buy(@Payload() userId: string) {
  //   return this.productsService.buyProcess('12');
  // }
}
