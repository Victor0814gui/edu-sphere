import { Permission } from "@/src/shared/application/entities/permission";




export namespace ICreatePermissionUseCase {
  export interface Params {
    name: string;
    description: string;
    level: number;
  }

  export type Response = Promise<Permission>

  export interface Implementation {
    execute: (props: ICreatePermissionUseCase.Params)
      => ICreatePermissionUseCase.Response;
  }
}