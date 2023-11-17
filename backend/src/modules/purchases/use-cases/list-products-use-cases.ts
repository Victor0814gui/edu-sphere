import { IListProductsUseCase } from "../interfaces/i-list-products-use-cases";
import { IListProductsRepository } from "../repositories/i-list-products-repository";
import { inject, injectable } from "tsyringe";



@injectable()
export class ListProductsUseCase
  implements IListProductsUseCase.Implementation {
  constructor(
    @inject("ListProductsRepository")
    private listProductsRepository: IListProductsRepository.Implementation
  ) { }
  async execute(params: IListProductsUseCase.Params):
    IListProductsUseCase.Response {

    const listProductsRepositoryResponse =
      await this.listProductsRepository.list();

    return listProductsRepositoryResponse;
  }
}