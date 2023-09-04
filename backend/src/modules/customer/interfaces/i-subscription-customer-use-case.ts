





export namespace ISubscriptionCustomerUseCase {
  export interface Params {
    priceId: string;
    quantity: number
  }

  export type Response = Promise<{
    url: string | null;
    code: number;
  }>;

  export interface Implementation {
    execute: (props: ISubscriptionCustomerUseCase.Params) => ISubscriptionCustomerUseCase.Response;
  }
}