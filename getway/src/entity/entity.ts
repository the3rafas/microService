import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserType {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  userName!: string;

  @Field(() => String, { nullable: false })
  email!: string;

  @Field(() => String, { nullable: false })
  password!: string;

  @Field(() => String, { nullable: false })
  userCase!: string;

  @Field(() => String, { nullable: false })
  paymentInfo?: string;

  @Field(() => String, { nullable: true })
  securityGroupId?: string;
}

@ObjectType()
export class SecuretyGroupType {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  groupName!: string;

  @Field(() => String, { nullable: false })
  description!: string;

  @Field(() => [String], { nullable: false })
  permissions!: string[];
  @Field(() => [UserType], { nullable: true })
  user?: UserType[];
}

@ObjectType()
export class PermissionsGroups {
  @Field(() => String)
  groupName: string;

  @Field(() => [String])
  permissions: string[];
}

@ObjectType()
export class ProductType {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => String, { nullable: false })
  CategoryId!: string;

  @Field(() => String, { nullable: false })
  storeId!: string;

  @Field(() => String, { nullable: true })
  image?: string;

  @Field(() => Number, { nullable: true })
  amount: number;
  @Field(() => Number, { nullable: true })
  price: number;
}

@ObjectType()
export class CategoryType {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  name!: string;

  @Field(() => [ProductType], { nullable: true })
  products?: ProductType[];
}

@ObjectType()
export class CartType {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: true })
  userId?: string;

  @Field(() => [CartProductType], { nullable: true })
  Products?: CartProductType[];

  @Field(() => Number, { nullable: false })
  cost!: number;
}
@ObjectType()
export class CartProductType {
  @Field(() => String, { nullable: false })
  id!: string;

  @Field(() => String, { nullable: false })
  ProductId: string;

  @Field(() => String, { nullable: false })
  cartId: string;

  @Field(() => Number, { nullable: false })
  amount: number;

  @Field(() => Number, { nullable: false })
  cost!: number;
}
