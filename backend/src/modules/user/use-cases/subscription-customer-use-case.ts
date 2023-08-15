import { inject, injectable } from "tsyringe";
import { ISubscriptionCustomerUseCase } from "../interfaces/i-subscription-customer-use-case";
import { ISubscriptionCustomerAccountsGateway } from "../infra/gateways/contracts/i-subscription-customer-accounts-gateway";





@injectable()
export class SubscriptionCustomerUseCase 
  implements ISubscriptionCustomerUseCase.Implementation{

  constructor(
    @inject("SubscriptionCustomerAccountsGateway")
    private subscriptionCustomerAccountsGateway: ISubscriptionCustomerAccountsGateway.Implementation
  ){}

  public async execute(props: ISubscriptionCustomerUseCase.Params):
  ISubscriptionCustomerUseCase.Response{

    const subscriptionCustomerAccountsGatewayService = 
      await this.subscriptionCustomerAccountsGateway.execute([{
        price:props.priceId,
        quantity: props.quantity,
      }])

    return subscriptionCustomerAccountsGatewayService;
  }
}