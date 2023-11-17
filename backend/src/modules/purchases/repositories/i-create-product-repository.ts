import { ProductType } from "@/src/shared/application/entities/product";
import { Product } from "../infra/entities/product";
import { ProductStatus } from "@/src/shared/application/entities/enums/i-product-status";



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
    export type Params = {
      name: string,
      id: string,
      price: number,
      status: ProductStatus,
      type: ProductType,
      createdAt: Date,
    };

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