import { container } from "tsyringe";

import { ICreateProductRepository } from "@purchases/repositories/i-create-product-repository";
import { CreateProductRepository } from "@purchases/repositories/implementation/create-product-repository";
import { PurchaseSubscriptionRepository } from "@/src/modules/purchases/repositories/implementation/purchase-subscription-repository";
import { ListProductsRepository } from "@purchases/repositories/implementation/list-products-repository";
import { IListProductsRepository } from "@purchases/repositories/i-list-products-repository";
import { IListSubscriptionsRepository } from "@purchases/repositories/i-list-subscriptions-repository";
import { ListSubscriptionsRepository } from "@purchases/repositories/implementation/list-subscriptions-repository";
import { IPurchaseSubscriptionRepository } from "@purchases/repositories/i-purchase-subscription-repository";
import { IInvoicePaymentSucceededUseCase } from "@purchases/interfaces/i-invoice-payment-succeeded-use-case";
import { InvoicePaymentSucceededUseCase } from "@purchases/use-cases/invoice-payment-succeeded-use-case";
import { IListTransactionsCustomerRepository } from "../../repositories/i-list-transactions-customer-repository";
import { ListTransactionsCustomerRepository } from "../../repositories/implementation/list-transactions-customer-repository";
import { InvoicePaymentSucceededRepository } from "../../repositories/implementation/invoice-payment-succeeded-repository";
import { IInvoicePaymentSucceededRepository } from "../../repositories/i-invoice-payment-succeeded-repository";

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

container.registerSingleton<IInvoicePaymentSucceededUseCase.Implementation>(
  "InvoicePaymentSucceededUseCase",
  InvoicePaymentSucceededUseCase
);

container.registerSingleton<IListTransactionsCustomerRepository.Implementation>(
  "ListTransactionsCustomerRepository",
  ListTransactionsCustomerRepository
);

container.registerSingleton<IInvoicePaymentSucceededRepository.Implementation>(
  "InvoicePaymentSucceededRepository",
  InvoicePaymentSucceededRepository,
)