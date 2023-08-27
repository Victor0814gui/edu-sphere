import crypto from "crypto";
import { container, inject, injectable } from "tsyringe"
import { UserBusinessException } from "@/src/modules/user/infra/exception/business-exception";
import { UserValidatorParams } from "../infra/validators/create";
import { ICreateUserAccountRepository } from "../repositories/i-create-user-repository";
import { CreateSessionTokenSecurity } from "../infra/security/create-session-token-security";
import { GenerateRefreshToken } from "../infra/security/create-refresh-token-security";
import { ICreateUserAccountUseCase } from "../interfaces/i-create-customer-account-use-case";



@injectable()
export class CreateUserAccountUseCase
  implements ICreateUserAccountUseCase.Implementation {
  constructor(
    @inject("UserValidatorParams")
    private userValidatorParams: UserValidatorParams,
    @inject("CreateUserAccountRepository")
    private createUserAccountRepository: ICreateUserAccountRepository.Implementation,
    @inject("CreateSessionTokenSecurity")
    private createSessionTokenSecurity: CreateSessionTokenSecurity,
  ) { }

  public async execute(props: ICreateUserAccountUseCase.Params):
    Promise<ICreateUserAccountUseCase.Response> {

    const generateRefreshToken = container.resolve(GenerateRefreshToken)

    this.userValidatorParams.validate(props)

    const verifyRoleAlreayExists = await this.createUserAccountRepository.findUniqueRole({
      name: props.role,
    })

    if (!verifyRoleAlreayExists?.name) {
      throw new UserBusinessException("role does not exists", 404);
    }

    const verifyUserAlreayExists = await this.createUserAccountRepository.findUnique({
      email: props.email
    })

    if (verifyUserAlreayExists?.id) {
      throw new UserBusinessException("user already exists", 400);
    }

    const createUserResponse = await this.createUserAccountRepository.create({
      role: props.role,
      id: crypto.randomUUID(),
      avatarUrl: props.avatarUrl,
      email: props.email,
      name: props.name,
      password: props.password,
      createdAt: new Date(),
    })

    const updateUserAddRoleAndPermissionsResponse = await this.createUserAccountRepository.update({
      id: createUserResponse.id,
      permissions: verifyRoleAlreayExists.permissions,
      role: verifyRoleAlreayExists.name,
    })

    const permisisons = updateUserAddRoleAndPermissionsResponse.permissions.map(permission => permission.name);

    const genetateTokenProvider = this.createSessionTokenSecurity.execute({
      userId: updateUserAddRoleAndPermissionsResponse.id,
      permissions: permisisons,
      role: updateUserAddRoleAndPermissionsResponse.roleName,
    });


    const refreshToken = await generateRefreshToken.execute(updateUserAddRoleAndPermissionsResponse.id);

    return {
      ...updateUserAddRoleAndPermissionsResponse,
      permissions: permisisons,
      token: genetateTokenProvider,
      refreshToken: refreshToken,
    }
  }
}