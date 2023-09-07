import { container } from "tsyringe"
import { SessionPurchaseProductGatway } from "../gateways/sessions-purchase-product-gatway"
import { ISessionPurchaseProductGatway } from "../gateways/contracts/i-sessions-purchase-product-gatway";



container.registerSingleton<ISessionPurchaseProductGatway.Implementation>(
  "SessionPurchaseProductGatway",
  SessionPurchaseProductGatway
);