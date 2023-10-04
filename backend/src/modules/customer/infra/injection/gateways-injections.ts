import { container } from "tsyringe"
import { SessionPurchaseProductGateway } from "../gateways/sessions-purchase-product-gateway"
import { ISessionPurchaseProductGateway } from "../gateways/contracts/i-sessions-purchase-product-gateway";



container.registerSingleton<ISessionPurchaseProductGateway.Implementation>(
  "SessionPurchaseProductGateway",
  SessionPurchaseProductGateway
);

