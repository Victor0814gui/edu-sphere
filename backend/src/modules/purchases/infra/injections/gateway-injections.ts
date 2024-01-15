import { container } from "tsyringe";
import { SubscriptionCustomerAccountsGateway } from "@/src/modules/customer/infra/gateways/subscription-customer-accounts-gateway";
import { ISubscriptionCustomerAccountGateway } from "@/src/modules/customer/infra/gateways/contracts/i-subscription-customer-accounts-gateway";
import { ISessionPurchaseProductGateway } from "../gateways/contracts/i-sessions-purchase-product-gateway";
import { SessionPurchaseProductGateway } from "../gateways/sessions-purchase-product-gateway";


container.registerSingleton<ISubscriptionCustomerAccountGateway.Implementation>(
  "SubscriptionCustomerAccountsGateway",
  SubscriptionCustomerAccountsGateway
);

container.registerSingleton<ISessionPurchaseProductGateway.Implementation>(
  "SessionPurchaseProductGateway",
  SessionPurchaseProductGateway
);