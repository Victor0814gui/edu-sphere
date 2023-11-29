type ProductInfo = {
  transactionId: string | null;
}


declare namespace ISessionPurchaseProductGateway { }

namespace ISessionPurchaseProductGateway {
  export type Params = {
    // customerId: string;
    // priceId: string;
    amount: number;
  }

  export type Response = Promise<ProductInfo | null>;
}


namespace ISessionPurchaseProductGateway {
  export type Implementation = {
    execute: (props: ISessionPurchaseProductGateway.Params)
      => ISessionPurchaseProductGateway.Response
  }
}

export { ISessionPurchaseProductGateway };