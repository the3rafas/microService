import { Test, TestingModule } from '@nestjs/testing';
import { SecuretyGroupService } from './securety-group.service';

describe('SecuretyGroupService', () => {
  let service: SecuretyGroupService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SecuretyGroupService],
    }).compile();

    service = module.get<SecuretyGroupService>(SecuretyGroupService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
