import { Customer } from "@/src/aplication/entities/user";






export namespace ICustomerAuthorizationAccountRepository {

  export namespace FindById {
    export type Params = {
      customerId: string;
    };

    export type Response = Promise<Customer | null>;
  }

  export namespace Update {
    export type Params = {
      email: string;
      status: string;
    };

    export type Response = Promise<Customer>;
  }

  export type Implementation = {
    findById: (props: ICustomerAuthorizationAccountRepository.FindById.Params)
      => ICustomerAuthorizationAccountRepository.FindById.Response;
    update: (props: ICustomerAuthorizationAccountRepository.Update.Params)
      => ICustomerAuthorizationAccountRepository.Update.Response;
  }
}