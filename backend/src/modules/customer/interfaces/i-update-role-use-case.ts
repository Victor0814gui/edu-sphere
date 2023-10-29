import { Permission } from "@/src/shared/application/entities/permission";
import { Role } from "@/src/shared/application/entities/role";
import { Customer } from "@/src/shared/application/entities/user";



export namespace IUpdateRoleUseCase {
  export type Params = {
    permissions: string[];
  } & Role

  export type Response = Promise<{
    permissions: string[];
  } & Role>

  export type Implementation = {
    execute: (props: IUpdateRoleUseCase.Params)
      => IUpdateRoleUseCase.Response;
  }
}