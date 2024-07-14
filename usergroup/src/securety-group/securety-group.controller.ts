import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { SecuretyGroupService } from './securety-group.service';
import {
  assignDto,
  CreateSecuretyGroupDto,
} from './dto/create-securety-group.dto';
import { UpdateSecuretyGroupDto } from './dto/update-securety-group.dto';
import {
  getAllPermissions,
  getGroupedPermissions,
} from './security-group-permissions';

@Controller()
export class SecuretyGroupController {
  constructor(private readonly securetyGroupService: SecuretyGroupService) {}

  @MessagePattern({ cmd: 'createSecuretyGroup' })
  create(@Payload() createSecuretyGroupDto: CreateSecuretyGroupDto) {
    return this.securetyGroupService.create(createSecuretyGroupDto);
  }

  @MessagePattern({ cmd: 'findAllSecuretyGroup' })
  findAll() {
    return this.securetyGroupService.findAll();
  }

  @MessagePattern({ cmd: 'assignSecuretyGroup' })
  assignUser(@Payload() assignDto: assignDto) {
    return this.securetyGroupService.asigiUserToGroup(
      assignDto.userId,
      assignDto.securetyGroupId,
    );
  }

  @MessagePattern({ cmd: 'unassignSecuretyGroup' })
  unassignUser(@Payload() assignDto: assignDto) {
    return this.securetyGroupService.unasigiUserToGroup(
      assignDto.userId,
      assignDto.securetyGroupId,
    );
  }

  @MessagePattern({ cmd: 'AllgroupPermision' })
  async groupPermision() {
    return getGroupedPermissions();
  }

  @MessagePattern({ cmd: 'getAllPermision' })
  allPermision() {
    return getAllPermissions();
  }
  @MessagePattern({ cmd: 'findOneSecuretyGroup' })
  findOne(@Payload() id: string) {
    return this.securetyGroupService.findOne(id);
  }

  @MessagePattern({ cmd: 'updateSecuretyGroup' })
  update(@Payload() updateSecuretyGroupDto: UpdateSecuretyGroupDto) {
    return this.securetyGroupService.update(updateSecuretyGroupDto);
  }

  @MessagePattern({ cmd: 'removeSecuretyGroup' })
  remove(@Payload() id: number) {
    return this.securetyGroupService.remove(id);
  }
}
