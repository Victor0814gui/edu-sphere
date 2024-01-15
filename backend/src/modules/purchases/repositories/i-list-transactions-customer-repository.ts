import { Transaction } from "@/src/shared/application/entities/transaction";


declare namespace IListTransactionsCustomerRepository { }



namespace IListTransactionsCustomerRepository {
  export namespace List {
    export type Params = {
      customerId: string;
    };

    export type Response = Promise<Transaction[]>;
  }
}

namespace IListTransactionsCustomerRepository {
  export type Implementation = {
    list: (params: IListTransactionsCustomerRepository.List.Params)
      => IListTransactionsCustomerRepository.List.Response;
  };
}

export { IListTransactionsCustomerRepository }