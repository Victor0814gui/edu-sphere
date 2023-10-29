import { injectable, inject } from "tsyringe";
import { IListCustomersUseCase } from "../interfaces/i-list-customers-use-case";
import { IListCustomersRepository } from "../repositories/i-list-customers-repository";


@injectable()
export class ListCustomersUseCase
  implements IListCustomersUseCase.Implementation {
  constructor(
    @inject("ListCustomersRepository")
    private listCustomersRepository: IListCustomersRepository.Implementation,
  ) { }
  async execute(props: IListCustomersUseCase.Params): IListCustomersUseCase.Response {

    const listCustomersRepositoryResponse =
      await this.listCustomersRepository.findMany()

    return listCustomersRepositoryResponse;
  }
} 