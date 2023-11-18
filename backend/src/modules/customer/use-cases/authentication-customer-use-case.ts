import { injectable, inject } from "tsyringe";
import { CustomerBusinessException } from "@customer/infra/exceptions/business-exception";
import { IAuthenticationCustomerUserCase } from "../interfaces/i-authenticate-customer-use-case";
import { IAuthenticationCustomerRepository } from "../repositories/i-authentication-customer-repository";
import { CreateSessionTokenSecurity } from "../infra/security/create-session-token-security";
import { GenerateRefreshToken } from "../infra/security/create-refresh-token-security";
import { ICompareEncryptDataService } from "../infra/services/contracts/i-compare-encrypt-data-service";
import { AccountStatusEnum } from "@/src/shared/application/entities/enums/i-account-status";

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

    const verifyCustomerAlreadyExists = await this.authenticationCustomerRepository.findUnique({
      email: props.email,
    });

    if (!verifyCustomerAlreadyExists?.id) {
      throw new CustomerBusinessException("Customer does not exists", 404);
    }

    if (verifyCustomerAlreadyExists?.status === AccountStatusEnum.Pending) {
      throw new CustomerBusinessException("You must activate your account first", 403);
    }

    if (verifyCustomerAlreadyExists?.email != props.email) {
      throw new CustomerBusinessException("Email or password has incorrect", 403);
    }

    const isPasswordHasCorrect = await this.compareEncryptDataService.execute({
      data: props.password,
      encrypted: verifyCustomerAlreadyExists?.password,
    })

    if (isPasswordHasCorrect == false) {
      throw new CustomerBusinessException("Email or password has incorrect", 403);
    }

    const permissions = verifyCustomerAlreadyExists
      .permissions
      .map(permission => permission.name);

    const roles = verifyCustomerAlreadyExists
      .roles
      .map(role => role.name);

    const generateTokenProvider = this.createSessionTokenSecurity.execute({
      customerId: verifyCustomerAlreadyExists.id,
      permissions: permissions,
      roles: roles,
    });

    const refreshTokenServiceResponse = await this.generateRefreshToken.execute({
      customerId: verifyCustomerAlreadyExists.id
    });


    const customer = {
      id: verifyCustomerAlreadyExists.id,
      name: verifyCustomerAlreadyExists.name,
      email: verifyCustomerAlreadyExists.email,
      password: verifyCustomerAlreadyExists.password,
      studentList: verifyCustomerAlreadyExists.studentList,
      createdAt: verifyCustomerAlreadyExists.createdAt,
      updatedAt: verifyCustomerAlreadyExists.updatedAt,
      avatarUrl: verifyCustomerAlreadyExists.avatarUrl,
      status: verifyCustomerAlreadyExists.status,
    }

    return {
      ...customer,
      token: generateTokenProvider,
      refreshToken: refreshTokenServiceResponse,
    }
  }
}