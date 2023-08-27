import { inject, injectable } from "tsyringe";
import { ISubscriptionCustomerUseCase } from "../interfaces/i-subscription-customer-use-case";
import { ISubscriptionCustomerAccountGateway } from "../infra/gateways/contracts/i-subscription-customer-accounts-gateway";





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
      await this.subscriptionCustomerAccountGateway.execute([{
        price: props.priceId,
        quantity: props.quantity,
      }])

    return subscriptionCustomerAccountGatewayService;
  }
}