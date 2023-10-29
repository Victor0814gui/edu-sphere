import { stripe } from "@/src/shared/infra/services/stripe";
import { ISessionPurchaseProductGateway } from "./contracts/i-sessions-purchase-product-gateway";





export class SessionPurchaseProductGateway
  implements ISessionPurchaseProductGateway.Implementation {

  async execute(props: ISessionPurchaseProductGateway.Params):
    ISessionPurchaseProductGateway.Response {
    const stripeCheckoutSessionResponse = await stripe.checkout.sessions.create({
      customer: props.customerId,
      mode: 'payment',
      billing_address_collection: "required",
      line_items: [
        { price: props.productId, quantity: props.productQuantity }
      ],
      success_url: props.successUrl,
      cancel_url: process.env.cancelUrl,
      allow_promotion_codes: true,
    });
    const stripeCheckoutSession = {
      amountSubtotal: stripeCheckoutSessionResponse.amount_subtotal,
      amountTotal: stripeCheckoutSessionResponse.amount_total,
      automaticTax: stripeCheckoutSessionResponse.automatic_tax.status,
      mode: stripeCheckoutSessionResponse.mode,
      customerEmail: stripeCheckoutSessionResponse.customer_email,
      currency: stripeCheckoutSessionResponse.currency,
    }

    return stripeCheckoutSession;
  }
}