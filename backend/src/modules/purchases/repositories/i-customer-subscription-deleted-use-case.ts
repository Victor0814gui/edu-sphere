



declare namespace ICustomerSubscriptionDeletedRepository { };


namespace ICustomerSubscriptionDeletedRepository {
  export namespace Delete {
    export type Params = {
      customerId: string;
      subscriptionId: string;
    };
    export type Response = Promise<any>;
  }
};

namespace ICustomerSubscriptionDeletedRepository {
  export type Implementation = {
    delete: (params: ICustomerSubscriptionDeletedRepository.Delete.Params)
      => ICustomerSubscriptionDeletedRepository.Delete.Response;
  };
};


export { ICustomerSubscriptionDeletedRepository };

