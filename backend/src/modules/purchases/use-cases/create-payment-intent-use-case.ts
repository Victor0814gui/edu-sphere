import crypto from "crypto";
import { inject, injectable } from "tsyringe";

import { ISessionPurchaseProductGateway } from "../infra/gateways/contracts/i-sessions-purchase-product-gateway";
import { ICreatePaymentIntentUseCase } from "../interfaces/i-create-payment-intent-use-case";
import { IPurchaseProductToCustomerRepository } from "../repositories/i-purchase-product-to-customer-repository";

@injectable()
export class CreatePaymentIntentUseCase
  implements ICreatePaymentIntentUseCase.Implementation{
  constructor(
    @inject("SessionPurchaseProductGateway")
    private sessionPurchaseProductGateway: ISessionPurchaseProductGateway.Implementation,
  ) { }
  public async execute(params: ICreatePaymentIntentUseCase.Params):
  ICreatePaymentIntentUseCase.Response{

    const sessionPurchaseProductGatewayResponse =
      await this.sessionPurchaseProductGateway.paymentIntent({
        amount: params.amount,
        currency: "brl",
      });

      return {
        id: crypto.randomUUID(),
        amount: sessionPurchaseProductGatewayResponse?.amount!,
        clientSecret: sessionPurchaseProductGatewayResponse?.clientSecret!,
      }
  }
}