import { Customer } from "@aplication/entities/user";

export namespace ICreateCustomerAccountUseCase {
  export interface Params {
    role: string;
    name: string;
    email: string;
    password: string;
    avatarUrl: string;
  }

  export interface Response extends Customer {
    token: string;
    refreshToken: string;
    permissions: string[];
  }

  export interface Implementation {
    execute: (props: ICreateCustomerAccountUseCase.Params) => Promise<ICreateCustomerAccountUseCase.Response>;
  }
}