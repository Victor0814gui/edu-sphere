import { container } from "tsyringe";
import { CreateCustomerAccountRepository } from "../../repositories/implementation/create-customer-account-repository";
import { ICreateCustomerAccountRepository } from "../../repositories/i-create-customer-account-repository";
import { CreateRefreshTokenRepository } from "../../repositories/implementation/create-refresh-token-repository";
import { ICreateRefreshTokenRepository } from "../../repositories/i-create-refresh-token-repository";
import { CustomerValidatorParams } from "../validators/create";
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
import { IPurchaseProductToCustomerRepository } from "../../../purchases/repositories/i-purchase-product-to-customer-repository";
import { PurchaseProductToCustomerRepository } from "../../../purchases/repositories/implementation/purchase-product-to-customer-repository";
import { DeleteCustomerAccountRepository } from "../../repositories/implementation/delete-customer-account-repository";
import { IDeleteCustomerAccountRepository } from "../../repositories/i-delete-customer-account-repository";
import { CustomerAuthorizationAccountRepository } from "../../repositories/implementation/customer-authorization-account-repository";
import { ICustomerAuthorizationAccountRepository } from "../../repositories/i-customer-authorization-account-repository";


container.registerSingleton<ICreateCustomerAccountRepository.Implementation>(
  'CreateCustomerAccountRepository',
  CreateCustomerAccountRepository
);

container.registerSingleton<ICreateRefreshTokenRepository.Implementation>(
  'CreateRefreshTokenRepository',
  CreateRefreshTokenRepository
);

container.registerSingleton<ICreateRoleRepository.Implementation>(
  "CreateRoleRepository",
  CreateRoleRepository,
);

container.registerSingleton<ICreateSessionTokenSecurity.Implementation>(
  "CreateSessionTokenSecurity",
  CreateSessionTokenSecurity,
);

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
);

container.registerSingleton<IPurchaseProductToCustomerRepository.Implementation>(
  "PurchaseProductToCustomerRepository",
  PurchaseProductToCustomerRepository,
);

container.registerSingleton<IDeleteCustomerAccountRepository.Implementation>(
  "DeleteCustomerAccountRepository",
  DeleteCustomerAccountRepository,
);

container.registerSingleton<ICustomerAuthorizationAccountRepository.Implementation>(
  "CustomerAuthorizationAccountRepository",
  CustomerAuthorizationAccountRepository
)