import { inject, injectable } from "tsyringe";
import { ISubscriptionCustomerUseCase } from "../interfaces/i-subscription-customer-use-case";
import { ISubscriptionCustomerAccountGateway } from "../infra/gateways/contracts/i-subscription-customer-accounts-gateway";
import CustomerBusinessException from "../infra/exceptions/business-exception";





@injectable()
export class SubscriptionCustomerUseCase
  implements ISubscriptionCustomerUseCase.Implementation {

  constructor(
    @inject("SubscriptionCustomerAccountsGateway")
    private subscriptionCustomerAccountGateway: ISubscriptionCustomerAccountGateway.Implementation
  ) { }

  public async execute(props: ISubscriptionCustomerUseCase.Params):
    ISubscriptionCustomerUseCase.Response {

    const subscriptionCustomerAccountGatewayService =
      await this.subscriptionCustomerAccountGateway.create({
        productId: props.priceId,
        quantity: props.quantity,
      })

    if (subscriptionCustomerAccountGatewayService.code === 500) {
      throw new CustomerBusinessException("Gatway payment are offline", 500);
    }




    return subscriptionCustomerAccountGatewayService;
  }
}