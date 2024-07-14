import { PermissionsGroups } from './permissions.type';

export enum UserPermissionsEnum {
  READ_USERS = 'READ_USERS',
  UPDATE_USERS = 'UPDATE_USERS',
  CREATE_USERS = 'CREATE_USERS',
  DELETE_USERS = 'DELETE_USERS',
}
export enum CategorePermissionsEnum {
  READ_CATEGORIES = 'READ_CATEGORIES',
  UPDATE_CATEGORIES = 'UPDATE_CATEGORIES',
  CREATE_CATEGORIES = 'CREATE_CATEGORIES',
  DELETE_CATEGORIES = 'DELETE_CATEGORIES',
}
export enum CousePermissionsEnum {
  READ_COURSE = 'READ_COURSE',
  UPDATE_COURSE = 'UPDATE_COURSE',
  CREATE_COURSE = 'CREATE_COURSE',
  DELETE_COURSE = 'DELETE_COURSE',
}

export enum SecurityGroupPermissionsEnum {
  READ_SECURITY_GROUPS = 'READ_SECURITY_GROUPS',
  UPDATE_SECURITY_GROUPS = 'UPDATE_SECURITY_GROUPS',
  CREATE_SECURITY_GROUPS = 'CREATE_SECURITY_GROUPS',
  DELETE_SECURITY_GROUPS = 'DELETE_SECURITY_GROUPS',
  ASSIGN_SECURITY_GROUPS_TO_USERS = 'ASSIGN_SECURITY_GROUPS_TO_USERS',
  UN_ASSIGN_SECURITY_GROUPS_TO_USERS = 'UN_ASSIGN_SECURITY_GROUPS_TO_USERS',
}

export enum NotificationPermissionsEnum {
  SEND_NOTIFICATIONS = 'SEND_NOTIFICATIONS',
}

export enum AppConfigurationPermissionsEnum {
  READ_APP_CONFIGURATION = 'READ_APP_CONFIGURATION',
  UPDATE_APP_CONFIGURATION = 'UPDATE_APP_CONFIGURATION',
  CREATE_APP_CONFIGURATION = 'CREATE_APP_CONFIGURATION',
}

export enum SpecialtyPermissionsEnum {
  READ_SPECIALTY = 'READ_SPECIALTY',
  UPDATE_SPECIALTY = 'UPDATE_SPECIALTY',
  CREATE_SPECIALTY = 'CREATE_SPECIALTY',
  DELETE_SPECIALTY = 'DELETE_SPECIALTY',
}

export enum WithdrawRequestPermissionsEnum {
  READ_WITHDRAW_REQUEST = 'READ_WITHDRAW_REQUEST',
  UPDATE_WITHDRAW_REQUEST = 'UPDATE_WITHDRAW_REQUEST',
  CREATE_WITHDRAW_REQUEST = 'CREATE_WITHDRAW_REQUEST',
  DELETE_WITHDRAW_REQUEST = 'DELETE_WITHDRAW_REQUEST',
}

export enum ExpertiseLevelPermissionsEnum {
  READ_EXPERTISE_LEVEL = 'READ_EXPERTISE_LEVEL',
  UPDATE_EXPERTISE_LEVEL = 'UPDATE_EXPERTISE_LEVEL',
  CREATE_EXPERTISE_LEVEL = 'CREATE_EXPERTISE_LEVEL',
  DELETE_EXPERTISE_LEVEL = 'DELETE_EXPERTISE_LEVEL',
}

export enum ChronicDiseasePermissionsEnum {
  READ_CHRONIC_DISEASE = 'READ_CHRONIC_DISEASE',
  UPDATE_CHRONIC_DISEASE = 'UPDATE_CHRONIC_DISEASE',
  CREATE_CHRONIC_DISEASE = 'CREATE_CHRONIC_DISEASE',
  DELETE_CHRONIC_DISEASE = 'DELETE_CHRONIC_DISEASE',
}

export enum DoctorPermissionsEnum {
  READ_DOCTOR = 'READ_DOCTOR',
  UPDATE_DOCTOR = 'UPDATE_DOCTOR',
}

export enum AppointmentVisitReasonPermissionsEnum {
  READ_APPOINTMENT_VISIT_REASON = 'READ_APPOINTMENT_VISIT_REASON',
  UPDATE_APPOINTMENT_VISIT_REASON = 'UPDATE_APPOINTMENT_VISIT_REASON',
  CREATE_APPOINTMENT_VISIT_REASON = 'CREATE_APPOINTMENT_VISIT_REASON',
  DELETE_APPOINTMENT_VISIT_REASON = 'DELETE_APPOINTMENT_VISIT_REASON',
}

export enum AppointmentPermissionsEnum {
  READ_APPOINTMENT = 'READ_APPOINTMENT',
  UPDATE_APPOINTMENT = 'UPDATE_APPOINTMENT',
  CREATE_APPOINTMENT = 'CREATE_APPOINTMENT',
  DELETE_APPOINTMENT = 'DELETE_APPOINTMENT',
}

export enum AppointmentMessagePermissionsEnum {
  READ_APPOINTMENT_MESSAGE = 'READ_APPOINTMENT_MESSAGE',
  UPDATE_APPOINTMENT_MESSAGE = 'UPDATE_APPOINTMENT_MESSAGE',
  CREATE_APPOINTMENT_MESSAGE = 'CREATE_APPOINTMENT_MESSAGE',
  DELETE_APPOINTMENT_MESSAGE = 'DELETE_APPOINTMENT_MESSAGE',
}

export enum ReviewPermissionsEnum {
  READ_REVIEW = 'READ_REVIEW',
  UPDATE_REVIEW = 'UPDATE_REVIEW',
  CREATE_REVIEW = 'CREATE_REVIEW',
  DELETE_REVIEW = 'DELETE_APPOINTMENT',
}

export enum ContactMessagePermissionsEnum {
  READ_CONTACT_MESSAGES = 'READ_CONTACT_MESSAGES',
  UPDATE_CONTACT_MESSAGES = 'UPDATE_CONTACT_MESSAGES',
  CREATE_CONTACT_MESSAGES = 'CREATE_CONTACT_MESSAGES',
  DELETE_CONTACT_MESSAGES = 'DELETE_CONTACT_MESSAGES',
}

export enum FaqPermissionsEnum {
  READ_FAQS = 'READ_FAQS',
  UPDATE_FAQS = 'UPDATE_FAQS',
  CREATE_FAQS = 'CREATE_FAQS',
  DELETE_FAQS = 'DELETE_FAQS',
}

export enum StatisticsPermissionsEnum {
  READ_STATISTICS = 'READ_STATISTICS',
}

export enum BankInformationPermissionsEnum {
  READ_BANK_INFORMATIONS = 'READ_BANK_INFORMATIONS',
  UPDATE_BANK_INFORMATIONS = 'UPDATE_BANK_INFORMATIONS',
  CREATE_BANK_INFORMATIONS = 'CREATE_BANK_INFORMATIONS',
  DELETE_BANK_INFORMATIONS = 'DELETE_BANK_INFORMATIONS',
}

export const permissions = {
  users: Object.keys(UserPermissionsEnum),
  securityGroups: Object.keys(SecurityGroupPermissionsEnum),
  notifications: Object.keys(NotificationPermissionsEnum),
  appConfigurations: Object.keys(AppConfigurationPermissionsEnum),
  specialties: Object.keys(SpecialtyPermissionsEnum),
  expertiseLevels: Object.keys(ExpertiseLevelPermissionsEnum),
  doctors: Object.keys(DoctorPermissionsEnum),
  chronicDiseases: Object.keys(ChronicDiseasePermissionsEnum),
  appointmentVisitReasons: Object.keys(AppointmentVisitReasonPermissionsEnum),
  appointments: Object.keys(AppointmentPermissionsEnum),
  appointmentMessages: Object.keys(AppointmentMessagePermissionsEnum),
  reviews: Object.keys(ReviewPermissionsEnum),
  contactMessages: Object.keys(ContactMessagePermissionsEnum),
  faqs: Object.keys(FaqPermissionsEnum),
  statistics: Object.keys(StatisticsPermissionsEnum),
  bankInformations: Object.keys(BankInformationPermissionsEnum),
  withdrawRequests: Object.keys(WithdrawRequestPermissionsEnum),
  course: Object.keys(CousePermissionsEnum),
  ategory: Object.keys(CategorePermissionsEnum),
};

export function getGroupedPermissions(): PermissionsGroups[] {
  let returnedPermissions: PermissionsGroups[] = [];
  let permissionGroup: PermissionsGroups;
  for (let key in permissions) {
    permissionGroup = {
      groupName: key,
      permissions: permissions[key],
    };
    returnedPermissions.push(permissionGroup);
  }
  return returnedPermissions;
}

export function getAllPermissions(): string[] {
  return Object.values(permissions).reduce((total, row) => {
    total.push(...row);
    return total;
  }, []);
}
