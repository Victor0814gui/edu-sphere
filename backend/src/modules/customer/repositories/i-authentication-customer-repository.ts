import { Permission } from "@/src/shared/application/entities/permission";
import { Customer } from "@/src/shared/application/entities/user";


type IPermission = {
  name: string;
}

type Role = {
  name: string;
}

export namespace IAuthenticationCustomerRepository {

  export namespace FindUnique {
    export type Params = {
      email: string;
    }
    export type Response = Promise<Customer & {
      permissions: IPermission[];
      roles: Role[]
    } | null>
  }

  export type Implementation = {
    findUnique: (props: IAuthenticationCustomerRepository.FindUnique.Params)
      => IAuthenticationCustomerRepository.FindUnique.Response;
  }
}