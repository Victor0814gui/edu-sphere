import { Product } from "@/src/shared/application/entities/product";


declare namespace ISyncProductWithGatewayUseCase { }

namespace ISyncProductWithGatewayUseCase {
  export type Params = {
    priceId: string
  };
}

namespace ISyncProductWithGatewayUseCase {
  export type Response = Promise<Product>;
}

namespace ISyncProductWithGatewayUseCase {
  export type Implementation = {
    execute: (params: ISyncProductWithGatewayUseCase.Params)
      => ISyncProductWithGatewayUseCase.Response
  };
}

export { ISyncProductWithGatewayUseCase };