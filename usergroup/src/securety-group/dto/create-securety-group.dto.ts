export class CreateSecuretyGroupDto {
  groupName: string;
  description: string;
  permissions: [string];
}
export class assignDto {
  userId: string;
  securetyGroupId: string;
}
