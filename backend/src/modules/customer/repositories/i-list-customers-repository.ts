import { Customer } from "@/src/shared/application/entities/user";


interface IPermissions {
  name: string;
}

export namespace IListCustomersRepository {

  export namespace FindMany {
    export interface Params { }

    export type Response = Promise<Array<Customer & IPermissions> | null>;
  }

  export interface Implementation {
    findMany: (props: FindMany.Params) => IListCustomersRepository.FindMany.Response;
  }
}