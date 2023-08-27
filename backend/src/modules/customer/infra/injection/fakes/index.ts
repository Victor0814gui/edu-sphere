import { container } from "tsyringe";


import { CreateCustomerAccountRepositoryFake } from "@customer/repositories/fakes/create-customer-account-repository-fake";
import { ICreateCustomerAccountRepository } from "@customer/repositories/i-create-customer-repository";


container.registerSingleton<ICreateCustomerAccountRepository.Implementation>(
  'CreateUserAccountRepositoryFake',
  CreateCustomerAccountRepositoryFake
);