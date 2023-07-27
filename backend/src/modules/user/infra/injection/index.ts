import { container } from "tsyringe";
import { CreateUserAccountRepository } from "../../repositories/implementation/create-user-account-repository";
import { ICreateUserAccountRepository } from "../../repositories/i-create-user-account-repository";
import { CreateRefreshTokenRepository } from "../../repositories/implementation/create-refresh-token-repository";
import { ICreateRefreshTokenRepository } from "../../repositories/i-create-refresh-token-repository";
import { UserValidatorParams } from "../validators/create";
import { ICreateRoleRepository } from "../../repositories/i-create-role-repository";
import { CreateRoleRepository } from "../../repositories/implementation/create-role-repository";
import { ICreatePermissionRepository } from "../../repositories/i-create-permission-repository";
import { CreatePermissionRepository } from "../../repositories/implementation/create-permission-repository";


container.registerSingleton<ICreateUserAccountRepository.Implementation>(
  'CreateUserAccountRepository',
  CreateUserAccountRepository
);

container.registerSingleton<ICreateRefreshTokenRepository.Implementation>(
  'CreateRefreshTokenRepository',
  CreateRefreshTokenRepository
);

container.registerSingleton<UserValidatorParams>(
  "UserValidatorParams",
  UserValidatorParams,
);

container.registerSingleton<ICreateRoleRepository.Implementation>(
  "CreateRoleRepository",
  CreateRoleRepository,
);

container.registerSingleton<ICreatePermissionRepository.Implementation>(
  "CreatePermissionRepository",
  CreatePermissionRepository,
);