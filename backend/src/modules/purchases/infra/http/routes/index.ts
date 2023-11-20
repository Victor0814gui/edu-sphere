import { Router } from "express";
import { container } from "tsyringe";
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

export const purchasesRoutes = Router();

const webhookListenerStripeController = container.resolve(WebhookListenerStripeController)
const purchaseSubscriptionController = container.resolve(PurchaseSubscriptionController);
const cancelSubscriptionController = container.resolve(CancelSubscriptionController);
const updateSubscriptionController = container.resolve(UpdateSubscriptionController);
const listProductsController = container.resolve(ListProductsController);
const listSubscriptionController = container.resolve(ListSubscriptionController);
const createProductController = container.resolve(CreateProductController);
const purchaseProductController = container.resolve(PurchaseProductController);


purchasesRoutes.post(
  "/webhooks",
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