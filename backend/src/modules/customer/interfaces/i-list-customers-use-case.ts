import { Permission } from "@/src/shared/application/entities/permission";
import { Customer } from "@/src/shared/application/entities/user";




export namespace IListCustomersUseCase {
  export interface Params { }

  export type Response = Promise<Array<Customer> | null>;

  export interface Implementation {
    execute: (props: IListCustomersUseCase.Params) => IListCustomersUseCase.Response;
  }
}