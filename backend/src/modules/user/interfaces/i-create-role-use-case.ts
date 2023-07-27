import { Role } from "@/src/aplication/entities/role";




export namespace ICreateRoleUseCase {
  export interface Params {
    name: string;
    description: string;
    level: number;
  }

  export interface Response extends Role { }

  export interface Implementation {
    execute: (props: ICreateRoleUseCase.Params) => Promise<ICreateRoleUseCase.Response>;
  }
}