import { Transaction } from "@/src/shared/application/entities/transaction";



declare namespace IListTransactionsCustomerUseCase { }

namespace IListTransactionsCustomerUseCase {
  export type Params = {
    customerId: string;
  };
}

namespace IListTransactionsCustomerUseCase {
  export type Response = Promise<Transaction[]>;
}

namespace IListTransactionsCustomerUseCase {
  export type Implementation = {
    execute: (params: IListTransactionsCustomerUseCase.Params)
      => IListTransactionsCustomerUseCase.Response;
  }
}


export { IListTransactionsCustomerUseCase };