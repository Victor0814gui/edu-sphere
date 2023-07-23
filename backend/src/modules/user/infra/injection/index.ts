import { container } from "tsyringe";
import { ICreateUserAccountRepository } from "../../repositories/i-create-user-account-repository";
import { CreateUserAccountRepository } from "../../repositories/implementation/create-user-account-repository copy";


container.registerSingleton<ICreateUserAccountRepository.Implementation>(
  'CreateUserAccountRepository',
  CreateUserAccountRepository
);