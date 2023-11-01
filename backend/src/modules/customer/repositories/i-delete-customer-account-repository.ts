import { Customer } from "@/src/shared/application/entities/user"



declare namespace IDeleteCustomerAccountRepository { }

namespace IDeleteCustomerAccountRepository {
  export namespace Delete {
    export type Params = {
      customerId: string;
    }

    export type Response = Promise<Customer | null>;
  }
}

namespace IDeleteCustomerAccountRepository {
  export namespace FindById {
    export type Params = {
      customerId: string;
    }

    export type Response = Promise<Customer>;
  }
}

namespace IDeleteCustomerAccountRepository {
  export type Implementation = {
    delete: (params: IDeleteCustomerAccountRepository.Delete.Params)
      => IDeleteCustomerAccountRepository.Delete.Response;
    findById: (params: IDeleteCustomerAccountRepository.FindById.Params)
      => IDeleteCustomerAccountRepository.FindById.Response;
  }
}

export { IDeleteCustomerAccountRepository }