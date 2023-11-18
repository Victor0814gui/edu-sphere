import { container } from "tsyringe";
import { SubscriptionCustomerAccountsGateway } from "@/src/modules/customer/infra/gateways/subscription-customer-accounts-gateway";
import { ISubscriptionCustomerAccountGateway } from "@/src/modules/customer/infra/gateways/contracts/i-subscription-customer-accounts-gateway";


container.registerSingleton<ISubscriptionCustomerAccountGateway.Implementation>(
  "SubscriptionCustomerAccountsGateway",
  SubscriptionCustomerAccountsGateway
)