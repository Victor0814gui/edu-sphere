import { inject, injectable } from "tsyringe";
import { IPurchaseSubscriptionUseCase } from "@purchases/interfaces/i-purchase-subscription-use-case";
import { IPurchaseSubscriptionRepository } from "@purchases/repositories/i-purchase-subscription-repository";
import { PurchaseBusinessException } from "@purchases/infra/exceptions/business-exception";
import { ISessionPurchaseProductGateway } from "../infra/gateways/contracts/i-sessions-purchase-product-gateway";


@injectable()
export class PurchaseSubscriptionUseCase
  implements IPurchaseSubscriptionUseCase.Implementation {
  constructor(
    @inject("PurchaseSubscriptionRepository")
    private purchaseSubscriptionRepository: IPurchaseSubscriptionRepository.Implementation,
    @inject("SessionPurchaseProductGateway")
    private sessionPurchaseProductGateway: ISessionPurchaseProductGateway.Implementation,
  ) { }

  public async execute(params: IPurchaseSubscriptionUseCase.Params):
    IPurchaseSubscriptionUseCase.Response {

    const verifyCustomerAlreadyExists =
      await this.purchaseSubscriptionRepository.findByCustomer({
        customerId: params.customerId,
      })

    if (!verifyCustomerAlreadyExists?.id) {
      throw new PurchaseBusinessException("Customer does not exist", 404)
    }

    const product = await this.sessionPurchaseProductGateway.findProduct({
      priceId: params.priceId,
    })

    if (!product.productId) {
      throw new PurchaseBusinessException("Subscriptions does not exits", 404);
    }

    const verifySubscriptionAlreadyExists =
      await this.purchaseSubscriptionRepository.findBySubscription({
        subscriptionId: product.productId!,
      })

    if (!verifySubscriptionAlreadyExists?.id) {
      throw new PurchaseBusinessException("Subscription does not exist", 404)
    }

    const purchase = await this.sessionPurchaseProductGateway.purchase({
      priceId: params.priceId,
    })

    await this.purchaseSubscriptionRepository.updateSubscription({
      customerId: params.customerId,
      subscriptionId: product.productId!,
    })

    const transaction =
      await this.purchaseSubscriptionRepository.transaction({
        id: purchase.transactionId!,
        userId: params.customerId,
        subscriptionId: product.productId,
        amount: purchase.amount!,
        paymentIntent: purchase.transactionId,
        currency: purchase.currency!,
        status: product.status!,
        createdAt: new Date(),
      })

    return transaction;
  }
}