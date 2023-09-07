import { Permission } from "@/src/aplication/entities/permission";
import { Role } from "@/src/aplication/entities/role";
import { Customer } from "@/src/aplication/entities/user";



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