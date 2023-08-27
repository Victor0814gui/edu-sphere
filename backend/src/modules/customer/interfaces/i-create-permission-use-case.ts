import { Permission } from "@/src/aplication/entities/permission";




export namespace ICreatePermissionUseCase {
  export interface Params {
    name: string;
    description: string;
    level: number;
  }

  export interface Response extends Permission { }

  export interface Implementation {
    execute: (props: ICreatePermissionUseCase.Params) => Promise<ICreatePermissionUseCase.Response>;
  }
}