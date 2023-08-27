import crypto from "crypto";
import { container, inject, injectable } from "tsyringe"
import { CustomerBusinessException } from "@customer/infra/exception/business-exception";
import { CustomerValidatorParams } from "../infra/validators/create";
import { ICreateCustomerAccountRepository } from "../repositories/i-create-customer-repository";
import { CreateSessionTokenSecurity } from "../infra/security/create-session-token-security";
import { GenerateRefreshToken } from "../infra/security/create-refresh-token-security";
import { ICreateCustomerAccountUseCase } from "../interfaces/i-create-customer-account-use-case";



@injectable()
export class CreateCustomerAccountUseCase
  implements ICreateCustomerAccountUseCase.Implementation {
  constructor(
    @inject("CustomerValidatorParams")
    private customerValidatorParams: CustomerValidatorParams,
    @inject("CreateCustomerAccountRepository")
    private createCustomerAccountRepository: ICreateCustomerAccountRepository.Implementation,
    @inject("CreateSessionTokenSecurity")
    private createSessionTokenSecurity: CreateSessionTokenSecurity,
  ) { }

  public async execute(props: ICreateCustomerAccountUseCase.Params):
    Promise<ICreateCustomerAccountUseCase.Response> {

    const generateRefreshToken = container.resolve(GenerateRefreshToken)

    this.customerValidatorParams.validate(props)

    const verifyRoleAlreayExists = await this.createCustomerAccountRepository.findUniqueRole({
      name: props.role,
    })

    if (!verifyRoleAlreayExists?.name) {
      throw new CustomerBusinessException("role does not exists", 404);
    }

    const verifyCustomerAlreayExists = await this.createCustomerAccountRepository.findUnique({
      email: props.email
    })

    if (verifyCustomerAlreayExists?.id) {
      throw new CustomerBusinessException("Customer already exists", 400);
    }

    const createCustomerResponse = await this.createCustomerAccountRepository.create({
      role: props.role,
      id: crypto.randomUUID(),
      avatarUrl: props.avatarUrl,
      email: props.email,
      name: props.name,
      password: props.password,
      createdAt: new Date(),
    })

    const updateCustomerAddRoleAndPermissionsResponse = await this.createCustomerAccountRepository.update({
      id: createCustomerResponse.id,
      permissions: verifyRoleAlreayExists.permissions,
      role: verifyRoleAlreayExists.name,
    })

    const permisisons = updateCustomerAddRoleAndPermissionsResponse.permissions.map(permission => permission.name);

    const genetateTokenProvider = this.createSessionTokenSecurity.execute({
      customerId: updateCustomerAddRoleAndPermissionsResponse.id,
      permissions: permisisons,
      role: updateCustomerAddRoleAndPermissionsResponse.roleName,
    });


    const refreshToken = await generateRefreshToken.execute(updateCustomerAddRoleAndPermissionsResponse.id);

    return {
      ...updateCustomerAddRoleAndPermissionsResponse,
      permissions: permisisons,
      token: genetateTokenProvider,
      refreshToken: refreshToken,
    }
  }
}