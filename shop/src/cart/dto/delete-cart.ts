import { PartialType } from '@nestjs/mapped-types';

export class DeleteCartDto {
  ProductId: string;
  cartId: string;
}
