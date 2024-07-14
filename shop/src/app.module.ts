import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { CartModule } from './cart/cart.module';
import { ProcessModule } from './buyPeocess/buy-process.module';

@Module({
  imports: [ProductsModule, CategoriesModule, CartModule, ProcessModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
 