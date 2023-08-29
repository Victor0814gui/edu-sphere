import { Customer } from "@/src/aplication/entities/user";






export namespace ICustomerAuthorizationAccountRepository {

  export namespace FindByEmail {
    export type Params = {
      email: string;
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
    findByEmail: (props: ICustomerAuthorizationAccountRepository.FindByEmail.Params)
      => ICustomerAuthorizationAccountRepository.FindByEmail.Response;
    update: (props: ICustomerAuthorizationAccountRepository.Update.Params)
      => ICustomerAuthorizationAccountRepository.Update.Response;
  }
}