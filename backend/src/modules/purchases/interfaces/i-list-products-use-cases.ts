

declare namespace IListProductsUseCase { };

namespace IListProductsUseCase {
  export type Params = void;
}

namespace IListProductsUseCase {
  export type Response = Promise<{}>
}


namespace IListProductsUseCase {
  export type Implementation = {
    execute: (params: IListProductsUseCase.Params)
      => IListProductsUseCase.Response;
  }
}

export { IListProductsUseCase };