import { Product } from "@/src/shared/application/entities/product";





declare namespace ICreateSubscriptionRepository { }
type Content = {}


namespace ICreateSubscriptionRepository {
  export namespace Create {
    export type Params = Product;

    export type Response = Promise<Product>;
  }
}

namespace ICreateSubscriptionRepository {
  export namespace FindByName {
    export type Params = {
      name: string;
      description: string;
      amount: string;
    }

    export type Response = Promise<Product | null>
  }
}

namespace ICreateSubscriptionRepository {
  export type Implementation = {
    create: (params: ICreateSubscriptionRepository.Create.Params)
      => ICreateSubscriptionRepository.Create.Response;
    findByName: (params: ICreateSubscriptionRepository.FindByName.Params)
      => ICreateSubscriptionRepository.FindByName.Response;
  }
}

export { ICreateSubscriptionRepository }