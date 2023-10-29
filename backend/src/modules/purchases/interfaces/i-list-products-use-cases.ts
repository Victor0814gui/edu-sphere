

declare namespace IListProductsUseCase {};

namespace IListProductsUseCase{
  export type Params = {}
}

namespace IListProductsUseCase{
  export type Response = Promise<{}>
}


namespace IListProductsUseCase{
  export type Implementation = {
    execute: (params: IListProductsUseCase.Params)
  => IListProductsUseCase.Response;
  }
}

export {IListProductsUseCase};