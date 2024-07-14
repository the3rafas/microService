import {
  Field,
  InputType,
  PartialType,
  registerEnumType,
} from '@nestjs/graphql';

enum UserCase {
  User = 'User',
  Store = 'Store',
}
registerEnumType(UserCase, { name: 'UserRoleEnum', description: undefined });

@InputType()
export class CreateUserdto {
  @Field(() => String)
  userName: string;
  @Field(() => String)
  password: string;
  @Field(() => String)
  email: string;
  @Field(() => UserCase)
  userCase: UserCase;
}

@InputType()
export class CreateSecuretyGroupDto {
  @Field()
  groupName!: string;
  @Field()
  description!: string;
  @Field(() => [String])
  permissions!: string[];
}
export interface CreateUsert {}

@InputType()
export class AssignUserToGroupdto {
  @Field()
  userId: string;
  @Field()
  securetyGroupId: string;
}

@InputType()
export class CreateCartDto {
  @Field(() => String)
  userId!: string;
  @Field(() => String)
  ProductId!: string;
  @Field(() => Number)
  amount!: number;
}

@InputType()
export class CreateCartList {
  @Field(() => [CreateCartDto])
  input: CreateCartDto[];
}
@InputType()
export class CreateProductDto {
  @Field()
  name: string;
  @Field()
  categoryName: string;
  @Field()
  amount: number;
  @Field()
  image: string;

  @Field()
  price: number;
}
@InputType()
export class UpdateProductDto extends PartialType(CreateProductDto) {
  @Field()
  id!: string;
}
@InputType()
export class CreateCategoryDto {
  @Field()
  name: string;
}
@InputType()
export class UpdateCategoryDto {
  @Field()
  existName: string;
  newName: string;
}

@InputType()
export class CreatePaymentdto {
  @Field()
  method: string;
  @Field()
  paymentId: string;
  @Field()
  value: string;
  @Field()
  date: string;
}

@InputType()
export class CartProductdto {
  @Field()
  ProductId: string;
  @Field()
  cartId: string;
  @Field()
  amount: number;
  @Field()
  cost: number;
}
@InputType()
export class CartProductInput {
  @Field(() => [CartProductdto])
  cartProducts: CartProductdto[];
}

// @InputType()
// export class ProcessCartdto {
//   @Field()
//   cost: number;
//   @Field()
//   productIds: string[];
//   @Field()
//   IBAN!: string;
//   @Field()
//   currency: string;
// }
