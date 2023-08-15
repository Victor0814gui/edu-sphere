import { User } from "@aplication/entities/user";

export namespace ICreateUserAccountUseCase {
  export interface Params {
    role: string;
    name: string;
    email: string;
    password: string;
    avatarUrl: string;
  }

  export interface Response extends User {
    token: string;
    refreshToken: string;
    permissions: string[];
  }

  export interface Implementation {
    execute: (props: ICreateUserAccountUseCase.Params) => Promise<ICreateUserAccountUseCase.Response>;
  }
}