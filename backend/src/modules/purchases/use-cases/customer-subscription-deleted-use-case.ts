import { inject, injectable } from "tsyringe";
import { ICustomerSubscriptionDeletedRepository } from "../repositories/i-customer-subscription-deleted-repository";
import { ICustomerSubscriptionDeletedUseCase } from "../interfaces/i-customer-subscription-deleted-use-case";

@injectable()
export class CustomerSubscriptionDeletedUseCase
  implements ICustomerSubscriptionDeletedUseCase.Implementation {
  constructor(
    @inject("CustomerSubscriptionDeletedRepository")
    private customerSubscriptionDeletedRepository:
      ICustomerSubscriptionDeletedRepository.Implementation
  ) { }
  public async execute(params: ICustomerSubscriptionDeletedUseCase.Params):
    ICustomerSubscriptionDeletedUseCase.Response {

    const customerSubscriptionDeletedRepositoryResponse =
      await this.customerSubscriptionDeletedRepository.delete(params)

    return customerSubscriptionDeletedRepositoryResponse;
  }
};

