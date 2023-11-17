import { stripe } from "@/src/shared/infra/services/stripe";
import { IPurchaseSubscriptionUseCase } from "../interfaces/i-purchase-subscription-use-case";
import { IPurchaseSubscriptionRepository } from "../repositories/i-purchase-subscription-repository";
import { inject, injectable } from "tsyringe";
import { PurchaseBusinessException } from "../infra/exceptions/business-exception";
import Stripe from "stripe";


@injectable()
export class PurchaseSubscriptionUseCase
  implements IPurchaseSubscriptionUseCase.Implementation {
  constructor(
    @inject("PurchaseSubscriptionRepository")
    private purchaseSubscriptionRepository: IPurchaseSubscriptionRepository.Implementation,
  ) { }

  public async execute(params: IPurchaseSubscriptionUseCase.Params):
    IPurchaseSubscriptionUseCase.Response {

    const verifySubscriptionAlreadyExists =
      await this.purchaseSubscriptionRepository.findBySubscription({
        subscriptionId: params.subscriptionId,
      })

    if (!verifySubscriptionAlreadyExists?.id) {
      throw new PurchaseBusinessException("Subscription does not exist", 404)
    }

    const verifyCustomerAlreadyExists =
      await this.purchaseSubscriptionRepository.findByCustomer({
        customerId: params.customerId,
      })

    if (!verifyCustomerAlreadyExists?.id) {
      throw new PurchaseBusinessException("Customer does not exist", 404)
    }


    try {
      await stripe.subscriptions.create({
        customer: params.customerId,
        items: [{
          price: params.subscriptionId,
        }],
        payment_behavior: 'default_incomplete',
        expand: ['latest_invoice.payment_intent'],
      });
    } catch (err) {
      throw new PurchaseBusinessException("internal server error - Gateway error", 500)
    }

    const PurchaseSubscriptionRepositoryResponse =
      await this.purchaseSubscriptionRepository.updateSubscription({
        customerId: params.customerId,
        subscriptionId: params.subscriptionId,
      })

    return PurchaseSubscriptionRepositoryResponse;
  }
}