import { container } from "tsyringe"
import { SessionPurchaseProductGateway } from "../gateways/sessions-purchase-product-gateway"
import { ISessionPurchaseProductGateway } from "../gateways/contracts/i-sessions-purchase-product-gateway";
import { EmailGateway } from "../gateways/email-gateway";



container.registerSingleton<ISessionPurchaseProductGateway.Implementation>(
  "SessionPurchaseProductGateway",
  SessionPurchaseProductGateway
);

container.registerSingleton<EmailGateway>(
  "EmailGateway",
  EmailGateway
)
