import { Product } from "@/src/shared/application/entities/product";


declare namespace IListProductsUseCase { };

namespace IListProductsUseCase {
  export type Params = void;
}

namespace IListProductsUseCase {
  export type Response = Promise<Product[]>
}


namespace IListProductsUseCase {
  export type Implementation = {
    execute: (params: IListProductsUseCase.Params)
      => IListProductsUseCase.Response;
  }
}

export { IListProductsUseCase };