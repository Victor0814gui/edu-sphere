import { Router } from "express";
import { container } from "tsyringe";
import express from "express";
import { userBusinessMiddleware } from "../middlewares/business-middleware";
import { customerAuthenticationCheck } from "../middlewares/customer-authentication-check";

import { WebhookListenerStripeController } from "../controller/webhooks-listener-stripe-controller";
import { PurchaseSubscriptionController } from "../controller/purchase-subscription-controller";
import { CancelSubscriptionController } from "../controller/cancel-subscription-controller";
import { UpdateSubscriptionController } from "../controller/update-subscription-controller";
import { ListProductsController } from "../controller/list-products-controller";
import { ListSubscriptionController } from "../controller/list-subscriptions-controller";
import { CreateProductController } from "../controller/create-product-controller";
import { PurchaseProductController } from "../controller/purchase-product-controller";
import { SyncProductWithGatewayController } from "../controller/sync-product-with-gateway-controller";
import { ListTransactionsCustomerController } from "../controller/list-transactions-customer-constroller";
import { CreatePaymentIntentController } from "../controller/create-payment-controller";

export const purchasesRoutes = Router();

const webhookListenerStripeController = container.resolve(WebhookListenerStripeController)
const purchaseSubscriptionController = container.resolve(PurchaseSubscriptionController);
const cancelSubscriptionController = container.resolve(CancelSubscriptionController);
const updateSubscriptionController = container.resolve(UpdateSubscriptionController);
const listProductsController = container.resolve(ListProductsController);
const listSubscriptionController = container.resolve(ListSubscriptionController);
const createProductController = container.resolve(CreateProductController);
const purchaseProductController = container.resolve(PurchaseProductController);
const syncProductWithGatewayController = container.resolve(SyncProductWithGatewayController);
const listTransactionsCustomerController = container.resolve(ListTransactionsCustomerController);
const createPaymentIntentController  =container.resolve(CreatePaymentIntentController);

purchasesRoutes.post(
  "/webhooks",
  express.raw({ type: 'application/json' }),
  // customerAuthenticationCheck,
  webhookListenerStripeController.handler,
);

purchasesRoutes.patch(
  "/subscriptions/update",
  customerAuthenticationCheck,
  updateSubscriptionController.handler,
);

purchasesRoutes.post(
  "/subscription/buy",
  customerAuthenticationCheck,
  purchaseSubscriptionController.handler,
);

purchasesRoutes.post(
  "/product/buy",
  // customerAuthenticationCheck,
  purchaseProductController.handler,
);

purchasesRoutes.patch(
  "/subscriptions/cancel",
  customerAuthenticationCheck,
  cancelSubscriptionController.handler,
);

purchasesRoutes.get(
  "/products/list",
  // customerAuthenticationCheck,
  listProductsController.handler,
);

purchasesRoutes.get(
  "/subscriptions/list",
  // customerAuthenticationCheck,
  listSubscriptionController.handler,
);

purchasesRoutes.post(
  "/products/create",
  // customerAuthenticationCheck,
  createProductController.handler,
);

purchasesRoutes.post(
  "/subscriptions/create",
  // customerAuthenticationCheck,
  createProductController.handler,
);


purchasesRoutes.post(
  "/sync/product",
  // customerAuthenticationCheck,
  syncProductWithGatewayController.handler,
);

purchasesRoutes.get(
  "/transactions",
  // customerAuthenticationCheck,
  listTransactionsCustomerController.handler,
);

purchasesRoutes.post(
  "/payment-intent",
  // customerAuthenticationCheck,
  createPaymentIntentController.handler,
)