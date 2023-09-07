import { Customer } from "@aplication/entities/user";


export namespace ICreateCustomerAccountUseCase {
  export type Params = {
    role: string;
    name: string;
    email: string;
    password: string;
    avatarUrl: string;
  }

  export type Response = Promise<Customer>

  export interface Implementation {
    execute: (props: ICreateCustomerAccountUseCase.Params) => ICreateCustomerAccountUseCase.Response;
  }
}