import { Test, TestingModule } from '@nestjs/testing';
import { SecuretyGroupController } from './securety-group.controller';
import { SecuretyGroupService } from './securety-group.service';

describe('SecuretyGroupController', () => {
  let controller: SecuretyGroupController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SecuretyGroupController],
      providers: [SecuretyGroupService],
    }).compile();

    controller = module.get<SecuretyGroupController>(SecuretyGroupController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
