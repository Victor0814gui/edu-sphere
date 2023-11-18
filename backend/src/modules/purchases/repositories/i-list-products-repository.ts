import { Product } from "@/src/shared/application/entities/product";


declare namespace IListProductsRepository { }



namespace IListProductsRepository {
  export namespace List {
    export type Params = void;

    export type Response = Promise<Product[]>;
  }
}

namespace IListProductsRepository {
  export type Implementation = {
    list: (params: IListProductsRepository.List.Params)
      => IListProductsRepository.List.Response;
  };
}

export { IListProductsRepository }