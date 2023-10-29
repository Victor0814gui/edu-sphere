import { Product } from "../infra/entities/product";






declare namespace ISubscriptionCustomerUseCase { }

type GatewayResponse = {
  url: string | null;
  code: number;
}

namespace ISubscriptionCustomerUseCase {
  export type Params = Product
}

namespace ISubscriptionCustomerUseCase {
  export type Response = Promise<GatewayResponse>;
}

namespace ISubscriptionCustomerUseCase {
  export type Implementation = {
    execute: (props: ISubscriptionCustomerUseCase.Params)
      => ISubscriptionCustomerUseCase.Response;
  }
}

export { ISubscriptionCustomerUseCase };