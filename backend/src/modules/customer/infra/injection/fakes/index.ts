import { container } from "tsyringe";


import { CreateCustomerAccountRepositoryFake } from "@customer/repositories/fakes/create-customer-account-repository-fake";
import { ICreateCustomerAccountRepository } from "@/src/modules/customer/repositories/i-create-customer-account-repository";


container.registerSingleton<ICreateCustomerAccountRepository.Implementation>(
  'CreateUserAccountRepositoryFake',
  CreateCustomerAccountRepositoryFake
);