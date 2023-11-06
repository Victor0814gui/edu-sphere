import { Router } from "express";
import { container } from "tsyringe";
import { customerAuthenticationCheck } from "../middlewares/customer-authentication-check";
import { WebhookListenerStripeController } from "../controller/webhooks-listener-stripe-controller";
import { CreateSubscriptionController } from "../controller/create-subscription-controller";
import { CancelSubscriptionController } from "../controller/cancel-subscription-controller";
import { UpdateSubscriptionController } from "../controller/update-subscription-controller";
import { userBusinessMiddleware } from "../middlewares/business-middleware";
import { ListProductsController } from "../controller/list-products-controller";


export const purchasesRoutes = Router();
const webhookListenerStripeController = container.resolve(WebhookListenerStripeController)
const createSubscriptionController = container.resolve(CreateSubscriptionController);
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
  "/subscription/create",
  customerAuthenticationCheck,
  createSubscriptionController.handler,
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