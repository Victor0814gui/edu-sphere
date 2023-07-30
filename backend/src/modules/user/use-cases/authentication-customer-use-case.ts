
import { Request, Response } from "express"
import { IAuthenticationCustomerUserCase } from "../interfaces/i-authenticate-customer-use-case";
import { container, inject, injectable } from "tsyringe";
import { IAuthenticationCustomerRepository } from "../repositories/i-authentication-customer-repository";
import AppErrors from "@/src/shared/infra/errors/app-errors";
import { CreateSessionTokenSecurity } from "../infra/security/create-session-token-security";
import { UserValidatorParams } from "../infra/validators/create";
import { GenerateRefreshToken } from "../infra/security/create-refresh-token-security";

@injectable()
export class AuthenticationCustomerUserCase
  implements IAuthenticationCustomerUserCase.Implementation {
  constructor(
    @inject('AuthenticationCustomerUserCase')
    private authenticationCustomerUserCase: IAuthenticationCustomerRepository.Implementation,
    @inject("UserValidatorParams")
    private userValidatorParams: UserValidatorParams,
    @inject("CreateSessionTokenSecurity")
    private createSessionTokenSecurity: CreateSessionTokenSecurity,
  ) { }
  async execute(props: IAuthenticationCustomerUserCase.Params):
    Promise<IAuthenticationCustomerUserCase.Response> {
    const generateRefreshToken = container.resolve(GenerateRefreshToken);

    const verifyCustomerAlreayExists = await this.authenticationCustomerUserCase.findUnique({
      email: props.email,
    });

    if (!verifyCustomerAlreayExists) {
      throw new AppErrors("customer does not exists", 404);
    }

    if (verifyCustomerAlreayExists.email != props.email) {
      throw new AppErrors("email or password has incorrect", 403);
    }

    if (verifyCustomerAlreayExists.password != props.password) {
      throw new AppErrors("email or password has incorrect", 403);
    }

    const permisisons = verifyCustomerAlreayExists.permissions.map(permission => permission.name);

    const genetateTokenProvider = this.createSessionTokenSecurity.execute({
      userId: verifyCustomerAlreayExists.id,
      permissions: permisisons,
      role: verifyCustomerAlreayExists.roleName,
    });

    const refreshToken = await generateRefreshToken.execute(verifyCustomerAlreayExists.id);

    return {
      ...verifyCustomerAlreayExists,
      token: genetateTokenProvider,
      refreshToken: refreshToken,
    }

  }
}