type ProductInfo = {
  transactionId: string | null;
}

export namespace ISessionPurchaseProductGateway {
  export type Params = {
    // customerId: string;
    // priceId: string;
    amount: number;
  }

  export type Response = Promise<ProductInfo | null>;

  export type Implementation = {
    execute: (props: ISessionPurchaseProductGateway.Params) =>
      ISessionPurchaseProductGateway.Response
  }
}