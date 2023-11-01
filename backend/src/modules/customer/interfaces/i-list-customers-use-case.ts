import { Permission } from "@/src/shared/application/entities/permission";
import { Customer } from "@/src/shared/application/entities/user";




export namespace IListCustomersUseCase {
  export type Params = void;
  export type Response = Promise<Array<Customer> | null>;

  export type Implementation = {
    execute: (props: IListCustomersUseCase.Params)
      => IListCustomersUseCase.Response;
  }
}