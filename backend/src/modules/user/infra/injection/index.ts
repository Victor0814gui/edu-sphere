import { container } from "tsyringe";
import { ICreateUserAccountRepository } from "../../repositories/i-create-user-account-repository";
import { CreateUserAccountRepository } from "../../repositories/implementation/create-refresh-token-repository";


container.registerSingleton<ICreateUserAccountRepository.Implementation>(
  'CreateUserAccountRepository',
  CreateUserAccountRepository
);