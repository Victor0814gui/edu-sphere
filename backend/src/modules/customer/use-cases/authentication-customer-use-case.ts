import { injectable, inject } from "tsyringe";
import { CustomerBusinessException } from "@customer/infra/exception/business-exception";
import { IAuthenticationCustomerUserCase } from "../interfaces/i-authenticate-customer-use-case";
import { IAuthenticationCustomerRepository } from "../repositories/i-authentication-customer-repository";
import { CreateSessionTokenSecurity } from "../infra/security/create-session-token-security";
import { GenerateRefreshToken } from "../infra/security/create-refresh-token-security";
import { ICompareEncryptDataService } from "../infra/services/contracts/i-compare-encrypt-data-service";

@injectable()
export class AuthenticationCustomerUserCase
  implements IAuthenticationCustomerUserCase.Implementation {
  constructor(
    @inject('AuthenticationCustomerRepository')
    private authenticationCustomerRepository: IAuthenticationCustomerRepository.Implementation,
    @inject("CreateSessionTokenSecurity")
    private createSessionTokenSecurity: CreateSessionTokenSecurity,
    @inject("GenerateRefreshToken")
    private generateRefreshToken: GenerateRefreshToken,
    @inject("CompareEncryptDataService")
    private compareEncryptDataService: ICompareEncryptDataService.Implementation
  ) { }

  public async execute(props: IAuthenticationCustomerUserCase.Params):
    IAuthenticationCustomerUserCase.Response {

    const verifyCustomerAlreayExists = await this.authenticationCustomerRepository.findUnique({
      email: props.email,
    });

    if (!verifyCustomerAlreayExists) {
      throw new CustomerBusinessException("Customer does not exists", 404);
    }

    if (verifyCustomerAlreayExists.email != props.email) {
      throw new CustomerBusinessException("Email or password has incorrect", 403);
    }

    const isPasswordHasCorrect = await this.compareEncryptDataService.execute({
      data: props.password,
      encrypted: verifyCustomerAlreayExists.password,
    })

    if (isPasswordHasCorrect) {
      throw new CustomerBusinessException("Email or password has incorrect", 403);
    }

    const permisisons = verifyCustomerAlreayExists.permissions.map(permission => permission.name);

    const genetateTokenProvider = this.createSessionTokenSecurity.execute({
      customerId: verifyCustomerAlreayExists.id,
      permissions: permisisons,
      role: verifyCustomerAlreayExists.roleName,
    });

    const refreshTokenServiceResponse = await this.generateRefreshToken.execute({
      customerId: verifyCustomerAlreayExists.id
    });

    return {
      ...verifyCustomerAlreayExists,
      token: genetateTokenProvider,
      refreshToken: refreshTokenServiceResponse,
    }

  }
}