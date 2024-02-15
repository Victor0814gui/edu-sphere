




declare namespace IRecoveryCustomerPasswordUseCase{}

namespace IRecoveryCustomerPasswordUseCase {
  export type Params = {
    email: string;
  }
}

namespace IRecoveryCustomerPasswordUseCase {
  export type Response = Promise<{}>;
}

namespace IRecoveryCustomerPasswordUseCase {
  export type Implementation = {
    execute: (params: IRecoveryCustomerPasswordUseCase.Params) 
      => IRecoveryCustomerPasswordUseCase.Response;
  }
}

export { IRecoveryCustomerPasswordUseCase };