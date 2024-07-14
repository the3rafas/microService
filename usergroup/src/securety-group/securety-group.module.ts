import { Module } from '@nestjs/common';
import { SecuretyGroupService } from './securety-group.service';
import { SecuretyGroupController } from './securety-group.controller';

@Module({
  controllers: [SecuretyGroupController],
  providers: [SecuretyGroupService]
})
export class SecuretyGroupModule {}
