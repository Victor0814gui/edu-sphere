import crypto from "crypto";
import { container, inject, injectable } from "tsyringe"
import AppErrors from "@/src/shared/infra/errors/app-errors";
import { User } from "@aplication/entities/user";
import { UserValidatorParams } from "../infra/validators/create";
import { ICreateUserAccountRepository } from "../repositories/i-create-user-repository";
import { CreateSessionTokenSecurity } from "../infra/security/create-session-token-security";
import { GenerateRefreshToken } from "../infra/security/create-refresh-token-security";

namespace ICreateUserAccountUseCase {
  export interface Params {
    role: string;
    name: string;
    email: string;
    password: string;
    avatarUrl: string;
  }

  export interface Response extends User {
    token: string;
    refreshToken: string;
    permissions: string[];
  }
}


@injectable()
export class CreateUserAccountUseCase {
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
      throw new AppErrors("role does not exists", 404);
    }

    const verifyUserAlreayExists = await this.createUserAccountRepository.findUnique({
      email: props.email
    })

    if (verifyUserAlreayExists?.id) {
      throw new AppErrors("user already exists", 400);
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
      role: updateUserAddRoleAndPermissionsResponse.role.name,
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