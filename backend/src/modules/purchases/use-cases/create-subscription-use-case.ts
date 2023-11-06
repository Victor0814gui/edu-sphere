import { stripe } from "@/src/shared/infra/services/stripe";
import { ICreateSubscriptionUseCase } from "../interfaces/i-create-subscription-use-case";
import { ICreateSubscriptionRepository } from "../repositories/i-create-subscription-repository";
import { inject, injectable } from "tsyringe";
import { PurchaseBusinessException } from "../infra/exceptions/business-exception";


@injectable()
export class CreateSubscriptionUseCase
  implements ICreateSubscriptionUseCase.Implementation {
  constructor(
    @inject("CreateSubscriptionRepository")
    private createSubscriptionRepository: ICreateSubscriptionRepository.Implementation,
  ) { }

  public async execute(params: ICreateSubscriptionUseCase.Params):
    ICreateSubscriptionUseCase.Response {

    const verifySubscriptionAlreadyExists =
      await this.createSubscriptionRepository.findBySubscription({
        subscriptionId: params.subscriptionId,
      })

    if (!verifySubscriptionAlreadyExists?.id) {
      throw new PurchaseBusinessException("Subscription does not exist", 404)
    }

    const verifyCustomerAlreadyExists =
      await this.createSubscriptionRepository.findByCustomer({
        customerId: params.customerId,
      })

    if (!verifyCustomerAlreadyExists?.id) {
      throw new PurchaseBusinessException("Customer does not exist", 404)
    }

    // try {
    //   await stripe.paymentMethods.attach(params.paymentMethodId, {
    //     customer: params.customerId,
    //   });
    // } catch (err) {
    //   console.log(err);
    //   throw new PurchaseBusinessException("Gateway error", 404)
    // }

    // try {

    //   await stripe.customers.update(
    //     params.customerId,
    //     {
    //       invoice_settings: {
    //         default_payment_method: params.paymentMethodId,
    //       },
    //     }
    //   );
    // } catch (err) {
    //   console.log(err);
    //   throw new PurchaseBusinessException("Gateway error", 404)
    // }

    // try {
    //   await stripe.subscriptions.create({
    //     customer: params.customerId,
    //     items: [{ price: process.env[params.priceId] }],
    //     expand: ['latest_invoice.payment_intent', 'pending_setup_intent'],
    //   });
    // } catch (err) {
    //   console.log(err);
    //   throw new PurchaseBusinessException("Gateway error", 404)
    // }

    const createSubscriptionRepositoryResponse =
      await this.createSubscriptionRepository.updateSubscription({
        customerId: params.customerId,
        subscriptionId: params.subscriptionId,
      })

    return createSubscriptionRepositoryResponse;
  }
}