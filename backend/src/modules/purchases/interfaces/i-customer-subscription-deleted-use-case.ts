



declare namespace ICustomerSubscriptionDeletedUseCase { };


namespace ICustomerSubscriptionDeletedUseCase {
  export type Params = {
    customerId: string;
    subscriptionId: string;
  };
};

namespace ICustomerSubscriptionDeletedUseCase {
  export type Response = Promise<any>;
};

namespace ICustomerSubscriptionDeletedUseCase {
  export type Implementation = {
    execute: (params: ICustomerSubscriptionDeletedUseCase.Params)
      => ICustomerSubscriptionDeletedUseCase.Response;
  };
};

export { ICustomerSubscriptionDeletedUseCase };