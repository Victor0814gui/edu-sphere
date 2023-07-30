import { Permission } from "@/src/aplication/entities/permission";
import { Customer } from "@/src/aplication/entities/user";




export namespace IListCustomersUseCase {
  export interface Params { }

  export interface Response extends Array<Customer> { }

  export interface Implementation {
    execute: (props: IListCustomersUseCase.Params) => Promise<IListCustomersUseCase.Response | null>;
  }
}