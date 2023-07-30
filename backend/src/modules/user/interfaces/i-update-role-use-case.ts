import { Permission } from "@/src/aplication/entities/permission";
import { Role } from "@/src/aplication/entities/role";
import { Customer } from "@/src/aplication/entities/user";


export namespace IUpdateRoleUseCase {
  export interface Params extends Role {
    permissions: string[];
  }

  export interface Response extends Role {
    permissions: string[];
  }

  export interface Implementation {
    execute: (props: IUpdateRoleUseCase.Params) => Promise<IUpdateRoleUseCase.Response | null>;
  }
}