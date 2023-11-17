import { Router } from "express";
import { container } from "tsyringe";
import { userBusinessMiddleware } from "../middlewares/business-middleware";
import { customerAuthenticationCheck } from "../middlewares/customer-authentication-check";

import { WebhookListenerStripeController } from "../controller/webhooks-listener-stripe-controller";
import { PurchaseSubscriptionController } from "../controller/purchase-subscription-controller";
import { CancelSubscriptionController } from "../controller/cancel-subscription-controller";
import { UpdateSubscriptionController } from "../controller/update-subscription-controller";
import { ListProductsController } from "../controller/list-products-controller";


export const purchasesRoutes = Router();
const webhookListenerStripeController = container.resolve(WebhookListenerStripeController)
const purchaseSubscriptionController = container.resolve(PurchaseSubscriptionController);
const cancelSubscriptionController = container.resolve(CancelSubscriptionController);
const updateSubscriptionController = container.resolve(UpdateSubscriptionController);
const listProductsController = container.resolve(ListProductsController);


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
  "/subscription/purchase",
  customerAuthenticationCheck,
  purchaseSubscriptionController.handler,
);

purchasesRoutes.patch(
  "/subscriptions/cancel",
  customerAuthenticationCheck,
  cancelSubscriptionController.handler,
);

purchasesRoutes.get(
  "/subscriptions/list",
  // customerAuthenticationCheck,
  listProductsController.handler,
);

purchasesRoutes.use(
  "/",
  userBusinessMiddleware,
)