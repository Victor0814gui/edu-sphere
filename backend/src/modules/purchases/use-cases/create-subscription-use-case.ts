


import { ICreateSubscriptionUseCase } from "../interfaces/i-create-subscription-use-case";
import { ICreateSubscriptionRepository } from "../repositories/i-create-subscription-repository";



export class CreateSubscriptionUseCase
  implements ICreateSubscriptionUseCase.Implementation {
  constructor(
    private createSubscriptionRepository: ICreateSubscriptionRepository.Implementation
  ) { }
  public async execute(params: ICreateSubscriptionUseCase.Params):
    ICreateSubscriptionUseCase.Response {

    const response = {} as ICreateSubscriptionUseCase.Response;

    return response;
  }
}