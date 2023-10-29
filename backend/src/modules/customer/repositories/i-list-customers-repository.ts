import { Customer } from "@/src/shared/application/entities/user";


type IPermissions = {
  name: string;
}

type IRoles = {
  name: string;
}

export namespace IListCustomersRepository {

  export namespace FindMany {
    export type Params = void;

    export type Response = Promise<Array<Customer & IPermissions & IRoles> | null>;
  }

  export type Implementation = {
    findMany: (props: IListCustomersRepository.FindMany.Params)
      => IListCustomersRepository.FindMany.Response;
  }
}