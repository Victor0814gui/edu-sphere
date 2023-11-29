




declare namespace ICreateSubscriptionUseCase { }
type Content = {}


namespace ICreateSubscriptionUseCase {
  export type Params = {
    name: string;
    description: string;
    amount: string;
  }
}

namespace ICreateSubscriptionUseCase {
  export type Response = Promise<Content>
}

namespace ICreateSubscriptionUseCase {
  export type Implementation = {
    execute: (params: ICreateSubscriptionUseCase.Params)
      => ICreateSubscriptionUseCase.Response;
  }
}

export { ICreateSubscriptionUseCase }