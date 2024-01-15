

import { inject, injectable } from "tsyringe";
import { IListTransactionsCustomerUseCase } from "../interfaces/i-list-transactions-customer-use-case";
import { IListTransactionsCustomerRepository } from "../repositories/i-list-transactions-customer-repository";


@injectable()
export class ListTransactionsCustomerUseCase
  implements IListTransactionsCustomerUseCase.Implementation {
  constructor(
    @inject("ListTransactionsCustomerRepository")
    private listTransactionsCustomerRepository: IListTransactionsCustomerRepository.Implementation,
  ) { }

  public async execute(props: IListTransactionsCustomerUseCase.Params):
    IListTransactionsCustomerUseCase.Response {

    const listTransactionsCustomerRepositoryResponse =
      await this.listTransactionsCustomerRepository.list(props);
    return listTransactionsCustomerRepositoryResponse;
  }
}