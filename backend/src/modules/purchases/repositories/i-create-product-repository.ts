import { Product } from "../infra/entities/product";



declare namespace ICreateProductRepository { }

namespace ICreateProductRepository {

  export namespace FindByName {
    export type Params = {
      name: string;
    };

    export type Response = Promise<Product | null>
  }
}

namespace ICreateProductRepository {
  export namespace Create {
    export type Params = Product;

    export type Response = Promise<Product>
  }
}

namespace ICreateProductRepository {
  export type Implementation = {
    findByName: (props: ICreateProductRepository.FindByName.Params)
      => ICreateProductRepository.FindByName.Response;
    create: (props: ICreateProductRepository.Create.Params)
      => ICreateProductRepository.Create.Response;
  }
}

export { ICreateProductRepository };