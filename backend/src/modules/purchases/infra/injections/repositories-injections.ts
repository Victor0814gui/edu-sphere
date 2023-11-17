import { container } from "tsyringe";
import { ICreateProductRepository } from "../../repositories/i-create-product-repository";
import { CreateProductRepository } from "../../repositories/implementation/create-product-repository";
import { CreateSubscriptionRepository } from "../../repositories/implementation/create-subscription-repository";
import { ICreateSubscriptionRepository } from "../../repositories/i-purchase-subscription-repository";

container.registerSingleton<ICreateProductRepository.Implementation>(
  "CreateProductRepository",
  CreateProductRepository,
);

container.registerSingleton<ICreateSubscriptionRepository.Implementation>(
  "CreateSubscriptionRepository",
  CreateSubscriptionRepository
);