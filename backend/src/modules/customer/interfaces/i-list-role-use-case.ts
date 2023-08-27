import { Role } from "@/src/aplication/entities/role";




export namespace IListRoleUseCase {
  export interface Params { }

  export interface Response extends Array<Role> { }

  export interface Implementation {
    execute: (props: IListRoleUseCase.Params) => Promise<IListRoleUseCase.Response | null>;
  }
}