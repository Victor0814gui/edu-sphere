



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
  export namespace FindByProductId {
    export type Params = {
      customerId: string;
      subscriptionId: string;
      productId: string;
    };
    export type Response = Promise<any>;
  }
};

namespace ICustomerSubscriptionDeletedRepository {
  export namespace FindByCustomerId {
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
    findByCustomerId: (params: ICustomerSubscriptionDeletedRepository.FindByCustomerId.Params)
      => ICustomerSubscriptionDeletedRepository.FindByCustomerId.Response;
    findByProductId: (params: ICustomerSubscriptionDeletedRepository.FindByProductId.Params)
      => ICustomerSubscriptionDeletedRepository.FindByProductId.Response;
  };
};


export { ICustomerSubscriptionDeletedRepository };

