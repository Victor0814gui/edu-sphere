import { Customer } from "@/src/shared/application/entities/user";
import { VerificationCode } from "@/src/shared/application/entities/verification-code";


interface Permissions {
  name: string;
}

export namespace ICreateCustomerAccountRepository {
  export namespace FindUnique {
    export type Params = {
      email: string;
    }

    export type Response = Promise<Customer | null>
  }

  export namespace Create {
    export type Params = {
      id: string;
      name: string;
      email: string;
      password: string
      avatarUrl: string;
      createdAt: Date;
      status: string;
    }

    export type Response = Promise<Customer>;
  }

  export namespace Update {
    export type Params = {
      id: string;
      permissions: string[];
      roles: string[];
    }

    export type Response = Promise<Customer & {
      permissions: string[];
    }>;
  }

  export namespace Code {
    export type Params = VerificationCode;

    export type Response = Promise<VerificationCode>;
  }

  export interface Implementation {
    findUnique: (props: ICreateCustomerAccountRepository.FindUnique.Params)
      => ICreateCustomerAccountRepository.FindUnique.Response;
    create: (props: ICreateCustomerAccountRepository.Create.Params)
      => ICreateCustomerAccountRepository.Create.Response;
    update: (props: ICreateCustomerAccountRepository.Update.Params)
      => ICreateCustomerAccountRepository.Update.Response;
    code: (props: ICreateCustomerAccountRepository.Code.Params)
      => ICreateCustomerAccountRepository.Code.Response;
  }
}