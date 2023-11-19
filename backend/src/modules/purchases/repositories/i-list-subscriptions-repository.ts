import { Product } from "@/src/shared/application/entities/product";




declare namespace IListSubscriptionsRepository { };


namespace IListSubscriptionsRepository {
  export namespace List {
    export type Params = void;
    export type Response = Promise<Product[]>;
  }
};

namespace IListSubscriptionsRepository {
  export type Implementation = {
    list: (params: IListSubscriptionsRepository.List.Params)
      => IListSubscriptionsRepository.List.Response;
  };
};


export { IListSubscriptionsRepository };

