type ProductInfo = {
  amountSubtotal: number | null;
  amountTotal: number | null;
  automaticTax: 'complete' | 'failed' | 'requires_location_inputs' | null;
  mode: 'payment' | 'setup' | 'subscription' | null;
  customerEmail: string | null;
  currency: string | null;
}

export namespace ISessionPurchaseProductGateway {

  export type Params = {
    customerId: string;
    productId: string;
    productQuantity: number;
    successUrl: string;
    cancelUrl: string;
  }

  export type Response = Promise<ProductInfo | null>;

  export type Implementation = {
    execute: (props: ISessionPurchaseProductGateway.Params) =>
      ISessionPurchaseProductGateway.Response
  }
}