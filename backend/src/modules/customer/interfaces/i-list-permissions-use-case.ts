import { Permission } from "@/src/shared/application/entities/permission";



export namespace IListPermissionsUseCase {
  export type Params = {}

  export type Response = Promise<Permission[] | null>

  export type Implementation = {
    execute: (props: IListPermissionsUseCase.Params)
      => IListPermissionsUseCase.Response;
  }
}