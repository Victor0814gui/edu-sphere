import { Router } from "express";
import { customerAuthenticationCheck } from "../middlewares/customer-authentication-check";
import { WebhookListenerStripeController } from "../controller/webhooks-listener-stripe-controller";
import { container } from "tsyringe";
import { CreateSubscriptionController } from "../controller/create-subscription-controller";
import { CancelSubscriptionController } from "../controller/cancel-subscription-controller";
import { UpdateSubscriptionController } from "../controller/update-subscription-controller";
import { userBusinessMiddleware } from "../middlewares/business-middleware";


export const purchasesRoutes = Router();
const webhookListenerStripeController = container.resolve(WebhookListenerStripeController)
const createSubscriptionController = container.resolve(CreateSubscriptionController);
const cancelSubscriptionController = container.resolve(CancelSubscriptionController);
const updateSubscriptionController = container.resolve(UpdateSubscriptionController);

purchasesRoutes.post(
  "/purchases/webhook",
  customerAuthenticationCheck,
  webhookListenerStripeController.handler,
);

purchasesRoutes.patch(
  "/purchase/subscriptions",
  customerAuthenticationCheck,
  updateSubscriptionController.handler,
);

purchasesRoutes.post(
  "/purchase/subscription",
  customerAuthenticationCheck,
  createSubscriptionController.handler,
);

purchasesRoutes.delete(
  "/subscriptions",
  customerAuthenticationCheck,
  cancelSubscriptionController.handler,
)

purchasesRoutes.use(
  "/",
  userBusinessMiddleware,
)