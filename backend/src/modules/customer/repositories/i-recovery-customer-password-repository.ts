import { Customer } from "@/src/shared/application/entities/user";


declare namespace IRecoveryCustomerPasswordRepository{}

namespace IRecoveryCustomerPasswordRepository {
  export namespace FindCustomer{
    export type Params = {
      email: string;
    };
    export type Response = Promise<Customer | null>;
  }
}

namespace IRecoveryCustomerPasswordRepository {
  export namespace RecoveryPassword{
    export type Params = void;
    export type Response = Promise<{}>;
  }
}

namespace IRecoveryCustomerPasswordRepository {
  export type Implementation = {
    findCustomer: (params: IRecoveryCustomerPasswordRepository.FindCustomer.Params) 
      => IRecoveryCustomerPasswordRepository.FindCustomer.Response;
    recoveryPassword: (params: IRecoveryCustomerPasswordRepository.RecoveryPassword.Params) 
      => IRecoveryCustomerPasswordRepository.RecoveryPassword.Response;
  }
}

export { IRecoveryCustomerPasswordRepository };