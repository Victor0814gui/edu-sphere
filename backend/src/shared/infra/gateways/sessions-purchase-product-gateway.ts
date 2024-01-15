import { stripe } from "@/src/shared/infra/services/stripe";
import { ISessionPurchaseProductGateway } from "./contracts/i-sessions-purchase-product-gateway";
import AppErrors from "@/src/shared/infra/errors/app-errors";



export class SessionPurchaseProductGateway
  implements ISessionPurchaseProductGateway.Implementation {

  async execute(props: ISessionPurchaseProductGateway.Params):
    ISessionPurchaseProductGateway.Response {

    if (!props.amount) {
      throw new AppErrors("amount does not exits", 404);
    }

    const charge = await stripe.charges.create({
      amount: props.amount,
      currency: 'brl',
      source: 'tok_visa',
      description: 'My First Test Charge (created for API docs at https://www.stripe.com/docs/api)',
    });

    const response = {
      transactionId: charge.id,
    }

    return response;
  }
}