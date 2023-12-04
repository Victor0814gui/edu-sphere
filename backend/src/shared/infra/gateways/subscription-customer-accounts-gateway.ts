import AppErrors from "../errors/app-errors";
import { stripe } from "@/src/shared/infra/services/stripe";
import { ISubscriptionCustomerAccountGateway } from "./contracts/i-subscription-customer-accounts-gateway";
import { PrismaClient } from "@prisma/client";
import { ProductTypeEnum } from "../../application/entities/enums/i-product-type";
import { ProductStatusEnum } from "../../application/entities/enums/i-product-status";


export class SubscriptionCustomerAccountsGateway
  implements ISubscriptionCustomerAccountGateway.Implementation {
  public async create(props: ISubscriptionCustomerAccountGateway.Create.Params):
    ISubscriptionCustomerAccountGateway.Create.Response {

    const stripeGatewayCreateProductResponse = await stripe.products.create({
      name: props.name,
      description: props.description,
    });

    const stripeGatewayCreatePriceProductResponse = await stripe.prices.create({
      unit_amount: props.amount,
      currency: props.currency,
      recurring: {
        interval: props.recurrence,
      },
      active: props.active,
      product: stripeGatewayCreateProductResponse.id,
    });

    if (!stripeGatewayCreatePriceProductResponse.id) {
      throw new AppErrors("Product not created", 500);
    }

    return {
      description: stripeGatewayCreateProductResponse.description!,
      id: stripeGatewayCreateProductResponse.id,
      name: stripeGatewayCreateProductResponse.name,
      amount: stripeGatewayCreatePriceProductResponse.unit_amount!,
      createdAt: new Date(),
      priceId: stripeGatewayCreatePriceProductResponse.id,
      productId: stripeGatewayCreateProductResponse.id,
      thumbnailUrl: null,
      updatedAt: null,
      status: stripeGatewayCreatePriceProductResponse.deleted ? ProductStatusEnum.private : ProductStatusEnum.public,
      type: ProductTypeEnum.subscription,
    };
  }

  public async findById(props: ISubscriptionCustomerAccountGateway.FindById.Params):
    ISubscriptionCustomerAccountGateway.FindById.Response {

    const product = await stripe.products.retrieve(
      props.subscriptionId,
    );

    return {
      name: product.name,
      description: product.description!,
      priceId: product.default_price as string,
      productId: product.id,
      status: product.deleted ? "public" : "private",
    };
  }
}