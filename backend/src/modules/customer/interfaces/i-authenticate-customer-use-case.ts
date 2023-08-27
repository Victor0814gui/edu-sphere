import { Customer } from "@/src/aplication/entities/user";






export namespace IAuthenticationCustomerUserCase {
  export interface Params {
    email: string;
    password: string;
  }

  export interface Response extends Customer {
    token: string;
    refreshToken: string;
  }

  export interface Implementation {
    execute: (props: IAuthenticationCustomerUserCase.Params) => Promise<IAuthenticationCustomerUserCase.Response>
  }
}