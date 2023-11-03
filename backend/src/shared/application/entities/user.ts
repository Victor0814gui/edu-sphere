import { AccountStatusEnum } from "./enums/account-status";
import { Permission } from "./permission";
import { Role } from "./role";

type Status = AccountStatusEnum.Active
  | AccountStatusEnum.Banned
  | AccountStatusEnum.Inactive
  | AccountStatusEnum.Pending;


export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  studentList?: any[]
  status: string;
  createdAt: Date;
  updatedAt: Date | null;
  avatarUrl: string;
}


export interface Customer extends User { }