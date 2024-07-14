export class CreateProductDto {
  name: string;
  categoryName: string;
  image: string;
  price: number;
  amount: number;
}

export class createProductInput {
  createproduct: CreateProductDto;
  userId: string;
}
