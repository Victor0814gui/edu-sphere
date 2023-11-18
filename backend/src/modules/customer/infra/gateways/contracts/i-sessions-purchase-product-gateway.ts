type ProductInfo = {
  subscriptionId: string | null;
  trialStart: number | null;
  trialEnd: number | null;
}

export namespace ISessionPurchaseProductGateway {

  export type Params = {
    customerId: string;
    priceId: string;
  }

  export type Response = Promise<ProductInfo | null>;

  export type Implementation = {
    execute: (props: ISessionPurchaseProductGateway.Params) =>
      ISessionPurchaseProductGateway.Response
  }
}