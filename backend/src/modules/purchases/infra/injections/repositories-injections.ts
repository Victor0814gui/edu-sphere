import { container } from "tsyringe";
import { ICreateProductRepository } from "../../repositories/i-create-product-repository";
import { CreateProductRepository } from "../../repositories/implementation/create-product-repository";
import { PurchaseSubscriptionRepository } from "../../repositories/implementation/create-subscription-repository";
import { ListProductsRepository } from "../../repositories/implementation/list-products-repository";
import { IListProductsRepository } from "../../repositories/i-list-products-repository";
import { IListSubscriptionsRepository } from "../../repositories/i-list-subscriptions-repository";
import { ListSubscriptionsRepository } from "../../repositories/implementation/list-subscriptions-repository";
import { IPurchaseSubscriptionRepository } from "../../repositories/i-purchase-subscription-repository";

container.registerSingleton<ICreateProductRepository.Implementation>(
  "CreateProductRepository",
  CreateProductRepository,
);

container.registerSingleton<IPurchaseSubscriptionRepository.Implementation>(
  "PurchaseSubscriptionRepository",
  PurchaseSubscriptionRepository
);

container.registerSingleton<IListProductsRepository.Implementation>(
  "ListProductsRepository",
  ListProductsRepository
);

container.registerSingleton<IListSubscriptionsRepository.Implementation>(
  "ListSubscriptionsRepository",
  ListSubscriptionsRepository
);