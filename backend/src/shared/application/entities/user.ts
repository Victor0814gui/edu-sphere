import { AccountStatus, AccountStatusEnum } from "./enums/i-account-status";
import { Permission } from "./permission";
import { Role } from "./role";



export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  studentList?: any[]
  status: AccountStatus;
  createdAt: Date;
  updatedAt: Date | null;
  avatarUrl: string;
}


export interface Customer extends User { }