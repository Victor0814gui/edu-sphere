import { inject, injectable } from "tsyringe";
import { IListSubscriptionsUseCase } from "../interfaces/i-list-subscriptions-use-case";
import { IListSubscriptionsRepository } from "../repositories/i-list-subscriptions-repository";




@injectable()
export class ListSubscriptionsUseCase
  implements IListSubscriptionsUseCase.Implementation {

  constructor(
    @inject("ListSubscriptionsRepository")
    private listSubscriptionsRepository: IListSubscriptionsRepository.Implementation,
  ) { }

  public async execute(params: IListSubscriptionsUseCase.Params):
    IListSubscriptionsUseCase.Response {

    const listSubscriptionsRepositoryResponse =
      await this.listSubscriptionsRepository.list()

    return listSubscriptionsRepositoryResponse;
  }
}