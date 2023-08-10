import { container } from "tsyringe";


import { CreateUserAccountRepositoryFake } from "../../../repositories/fakes/create-user-account-repository-fake";
import { ICreateUserAccountRepository } from "../../../repositories/i-create-user-repository";


container.registerSingleton<ICreateUserAccountRepository.Implementation>(
  'CreateUserAccountRepositoryFake',
  CreateUserAccountRepositoryFake
);