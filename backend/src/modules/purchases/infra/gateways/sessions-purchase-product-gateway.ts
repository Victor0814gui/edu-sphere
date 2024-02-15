import { stripe } from "@/src/shared/infra/services/stripe";
import { ISessionPurchaseProductGateway } from "./contracts/i-sessions-purchase-product-gateway";
import { PurchaseBusinessException } from "../exceptions/business-exception";
import { ProductStatusEnum } from "@/src/shared/application/entities/enums/i-product-status";



export class SessionPurchaseProductGateway
  implements ISessionPurchaseProductGateway.Implementation {
  public async findProduct(props: ISessionPurchaseProductGateway.FindProduct.Params):
    ISessionPurchaseProductGateway.FindProduct.Response {
    const price = await stripe.prices.retrieve(props.priceId as string);

    if (!price.id) {
      throw new PurchaseBusinessException("price error gateway", 500);
    }

    const product = await stripe.products.retrieve(price.product as string);

    if (!product.id) {
      throw new PurchaseBusinessException("error gateway", 500);
    }

    return {
      id: product.id,
      productId: product.id,
      priceId: price.id as string,
      name: product.name!,
      description: product.description,
      status: product.active ? ProductStatusEnum.public : ProductStatusEnum.private,
      amount: price.unit_amount,
      createdAt: product.created,
      type: price.type === "one_time" ? "product" : "subscription",
    };
  };

  public async create(props: ISessionPurchaseProductGateway.Create.Params):
    ISessionPurchaseProductGateway.Create.Response {
    console.log(props)
    const product = await stripe.products.create({
      name: props.name,
      description: props.description,
    });

    const price = await stripe.prices.create({
      unit_amount: props.amount,
      product: product.id!,
      currency: "brl",
    });

    return {
      priceId: product.id as string,
      productId: product.id,
      name: product.name!,
      description: product.description!,
      amount: price.unit_amount!,
    };
  };

  public async purchase(props: ISessionPurchaseProductGateway.Purchase.Params):
    ISessionPurchaseProductGateway.Purchase.Response {

    const price = await stripe.prices.retrieve(
      props.priceId,
    );

    if (!price.unit_amount) {
      throw new PurchaseBusinessException("error gateway", 500);
    }

    const paymentIntents = await stripe.paymentIntents.create({
      amount: price.unit_amount!,
      currency: price.currency,
      automatic_payment_methods: { enabled: false },
    });

    const response = {
      id: paymentIntents.id,
      transactionId: paymentIntents.client_secret,
      currency: paymentIntents.currency,
      amount: paymentIntents.amount,
    }

    return response;
  }

  public async paymentIntent(params: ISessionPurchaseProductGateway.PaymentIntent.Params):
  ISessionPurchaseProductGateway.PaymentIntent.Response {

    const paymentIntents = await stripe.paymentIntents.create({
      amount: params.amount!,
      currency: params.currency,
      automatic_payment_methods: { enabled: false },
    });

    const response = {
      id: paymentIntents.id,
      clientSecret: paymentIntents.client_secret,
      amount: paymentIntents.amount,
    }

    return {
      ...paymentIntents,
      clientSecret: paymentIntents.client_secret!,
    };
  }
}