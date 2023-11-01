import { Permission } from "@/src/shared/application/entities/permission";
import { Role } from "@/src/shared/application/entities/role";
import { Customer } from "@/src/shared/application/entities/user";




declare namespace ICustomerAuthorizationAccountRepository { }


namespace ICustomerAuthorizationAccountRepository {
  export namespace FindById {
    export type Params = {
      customerId: string;
    };

    export type Response = Promise<Customer | null>;
  }
}

namespace ICustomerAuthorizationAccountRepository {
  export namespace Update {
    export type Params = {
      email: string;
      status: string;
      permissions: Permission[];
      roles: Role[];
    };

    export type Response = Promise<Customer>;
  }
}

namespace ICustomerAuthorizationAccountRepository {
  export namespace FindPermissions {
    export type Params = {
      level: number
    };

    export type Response = Promise<Permission[] | null>;
  }
}

namespace ICustomerAuthorizationAccountRepository {
  export namespace FindRoles {
    export type Params = {
      level: number
    };

    export type Response = Promise<Role[] | null>;
  }
}

namespace ICustomerAuthorizationAccountRepository {
  export type Implementation = {
    findPermissions: (params: ICustomerAuthorizationAccountRepository.FindPermissions.Params)
      => ICustomerAuthorizationAccountRepository.FindPermissions.Response;
    findRoles: (params: ICustomerAuthorizationAccountRepository.FindRoles.Params)
      => ICustomerAuthorizationAccountRepository.FindRoles.Response;
    findById: (props: ICustomerAuthorizationAccountRepository.FindById.Params)
      => ICustomerAuthorizationAccountRepository.FindById.Response;
    update: (props: ICustomerAuthorizationAccountRepository.Update.Params)
      => ICustomerAuthorizationAccountRepository.Update.Response;
  }
}

export { ICustomerAuthorizationAccountRepository };