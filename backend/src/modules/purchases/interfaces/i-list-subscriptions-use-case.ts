import { Product } from "@/src/shared/application/entities/product"


declare namespace IListSubscriptionsUseCase { }

type IContent = Product[] | null;

namespace IListSubscriptionsUseCase {
  export type Params = void;
}

namespace IListSubscriptionsUseCase {
  export type Response = Promise<IContent>
}

namespace IListSubscriptionsUseCase {
  export type Implementation = {
    execute: (params: IListSubscriptionsUseCase.Params)
      => IListSubscriptionsUseCase.Response
  }
}

export { IListSubscriptionsUseCase };