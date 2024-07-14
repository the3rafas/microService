import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UserType } from 'src/entity/entity';

@ObjectType()
export class Auth {
  @Field(() => String)
  tocken: string;
  @Field(() => UserType)
  user? : UserType;
}
