import { Permission } from "@/src/aplication/entities/permission";
import { Customer } from "@/src/aplication/entities/user";


interface IPermission {
  name: string;
}

export namespace IAuthenticationCustomerRepository {

  export namespace FindUnique {
    export interface Params {
      email: string;
    }
    export interface Response extends Customer {
      permissions: IPermission[]
    }
  }

  export interface Implementation {
    findUnique: (props: FindUnique.Params) => Promise<FindUnique.Response | null>;
  }
}