import { Customer } from "@/src/shared/application/entities/user";


export namespace ICreateCustomerAccountUseCase {
  export type Params = {
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