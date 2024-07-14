import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAuthInput {
  @Field(() => String)
  userName: string;
  @Field(() => String)
  password: string;
}
