import { Role } from "@/src/shared/application/entities/role";




export namespace IListRoleUseCase {
  export type Params = {}

  export type Response = Promise<Role[] | null>

  export type Implementation = {
    execute: (props: IListRoleUseCase.Params)
      => IListRoleUseCase.Response
  }
}