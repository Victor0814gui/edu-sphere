import { stripe } from "@/src/shared/infra/services/stripe";
import { ISessionPurchaseProductGatway } from "./contracts/i-sessions-purchase-product-gatway";





export class SessionPurchaseProductGatway
  implements ISessionPurchaseProductGatway.Implementation {

  async execute(props: ISessionPurchaseProductGatway.Params):
    ISessionPurchaseProductGatway.Response {
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