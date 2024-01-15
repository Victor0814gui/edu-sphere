import { Permission } from "@/src/shared/application/entities/permission";
import { Role } from "@/src/shared/application/entities/role";
import { Customer } from "@/src/shared/application/entities/user";
import { VerificationCode } from "@/src/shared/application/entities/verification-code";




declare namespace ICustomerAuthorizationAccountRepository { }


namespace ICustomerAuthorizationAccountRepository {
  export namespace FindByCode {
    export type Params = {
      code: string;
    };

    export type Response = Promise<VerificationCode | null>;
  }
}

namespace ICustomerAuthorizationAccountRepository {
  export namespace Update {
    export type Params = {
      customerId: string;
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
    findByCode: (props: ICustomerAuthorizationAccountRepository.FindByCode.Params)
      => ICustomerAuthorizationAccountRepository.FindByCode.Response;
    update: (props: ICustomerAuthorizationAccountRepository.Update.Params)
      => ICustomerAuthorizationAccountRepository.Update.Response;
  }
}

export { ICustomerAuthorizationAccountRepository };