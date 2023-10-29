import { Permission } from "./permission";
import { Role } from "./role";




export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  studentList?: any[]
  createdAt: Date;
  updatedAt: Date | null;
  avatarUrl: string;
}


export interface Customer extends User { }