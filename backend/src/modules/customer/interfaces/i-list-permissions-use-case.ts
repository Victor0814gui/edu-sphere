import { Permission } from "@/src/aplication/entities/permission";



export namespace IListPermissionsUseCase {
  export interface Params { }

  export interface Response extends Array<Permission> { }

  export interface Implementation {
    execute: (props: IListPermissionsUseCase.Params) => Promise<IListPermissionsUseCase.Response | null>;
  }
}