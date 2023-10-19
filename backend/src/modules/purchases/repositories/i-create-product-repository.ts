import { Product } from "../infra/entities/product";






interface Permission {
  name: string;
}

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
    export type Params = Product & {
      permissions: Permission[];
    };

    export type Response = Promise<Product & {
      permissions: Permission[];
    }>
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