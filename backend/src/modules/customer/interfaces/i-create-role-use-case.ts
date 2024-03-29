import { Role } from "@/src/shared/application/entities/role";




export namespace ICreateRoleUseCase {
  export interface Params {
    name: string;
    description: string;
    level: number;
  }

  export type Response = Promise<Role>;

  export interface Implementation {
    execute: (props: ICreateRoleUseCase.Params) => ICreateRoleUseCase.Response;
  }
}