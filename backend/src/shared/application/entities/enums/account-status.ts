export enum AccountStatusEnum {
  Active = "active",
  Banned = "banned",
  Pending = "pending",
  Inactive = "inactive",
}


export type AccountStatus =
  AccountStatusEnum.Active
  | AccountStatusEnum.Banned
  | AccountStatusEnum.Inactive
  | AccountStatusEnum.Pending