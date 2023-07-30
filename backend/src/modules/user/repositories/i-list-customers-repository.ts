import { Customer } from "@/src/aplication/entities/user";


interface IPermissions {
  name: string;
}

export namespace IListCustomersRepository {

  export namespace FindMany {
    export interface Params { }

    export interface Response extends Array<Customer & IPermissions> { }
  }

  export interface Implementation {
    findMany(props: FindMany.Params): Promise<FindMany.Response | null>;
  }
}