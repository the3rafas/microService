import { PartialType } from '@nestjs/mapped-types';

export class UpdateCartDto {
  ProductId: string;
  userId: string;
  amount: number;
}
