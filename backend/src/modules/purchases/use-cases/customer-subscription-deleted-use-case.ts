import { ICustomerSubscriptionDeletedRepository } from "../repositories/i-customer-subscription-deleted-use-case";
import { ICustomerSubscriptionDeletedUseCase } from "../interfaces/i-customer-subscription-deleted-use-case";


export class CustomerSubscriptionDeletedUseCase
  implements ICustomerSubscriptionDeletedUseCase.Implementation {
  constructor(
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