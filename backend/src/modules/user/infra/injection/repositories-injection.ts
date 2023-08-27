import { container } from "tsyringe";
import { CreateUserAccountRepository } from "../../repositories/implementation/create-user-account-repository";
import { ICreateUserAccountRepository } from "../../repositories/i-create-user-repository";
import { CreateRefreshTokenRepository } from "../../repositories/implementation/create-refresh-token-repository";
import { ICreateRefreshTokenRepository } from "../../repositories/i-create-refresh-token-repository";
import { UserValidatorParams } from "../validators/create";
import { ICreateRoleRepository } from "../../repositories/i-create-role-repository";
import { CreateRoleRepository } from "../../repositories/implementation/create-role-repository";
import { ICreatePermissionRepository } from "../../repositories/i-create-permission-repository";
import { CreatePermissionRepository } from "../../repositories/implementation/create-permission-repository";
import { ListCustomersRepository } from "../../repositories/implementation/list-customers-account-repository";
import { IListCustomersRepository } from "../../repositories/i-list-customers-repository";
import { CreateSessionTokenSecurity, ICreateSessionTokenSecurity } from "../security/create-session-token-security";
import { IUpdateRoleRepository } from "../../repositories/i-update-role-repository";
import { UpdateRoleRepository } from "../../repositories/implementation/update-role-repository";
import { AuthenticationCustomerRepository } from "../../repositories/implementation/authentication-customer-repository";
import { IAuthenticationCustomerRepository } from "../../repositories/i-authentication-customer-repository";
import { ICreateProductRepository } from "../../repositories/i-create-product-repository";
import { CreateProductRepository } from "../../repositories/implementation/create-product-repository";


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

container.registerSingleton<ICreateSessionTokenSecurity.Implementation>(
  "CreateSessionTokenSecurity",
  CreateSessionTokenSecurity,
)

container.registerSingleton<ICreatePermissionRepository.Implementation>(
  "CreatePermissionRepository",
  CreatePermissionRepository,
);

container.registerSingleton<IListCustomersRepository.Implementation>(
  "ListCustomersRepository",
  ListCustomersRepository,
);

container.registerSingleton<IUpdateRoleRepository.Implementation>(
  "UpdateRoleRepository",
  UpdateRoleRepository,
);

container.registerSingleton<IAuthenticationCustomerRepository.Implementation>(
  "AuthenticationCustomerRepository",
  AuthenticationCustomerRepository
)

container.registerSingleton<ICreateProductRepository.Implementation>(
  "CreateProductRepository",
  CreateProductRepository,
)