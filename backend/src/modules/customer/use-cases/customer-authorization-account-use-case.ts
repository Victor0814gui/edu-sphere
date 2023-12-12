import { injectable, inject } from "tsyringe";
import { AccountStatusEnum } from "@customer/interfaces/enums/account-status-enum";
import { CustomerBusinessException } from "@customer/infra/exceptions/business-exception";
import { ICustomerAuthorizationAccountUseCase } from "@customer/interfaces/i-customer-authorization-account-use-case";
import { ICustomerAuthorizationAccountRepository } from "@customer/repositories/i-customer-authorization-account-repository";



@injectable()
export class CustomerAuthorizationAccountUseCase
  implements ICustomerAuthorizationAccountUseCase.Implementation {
  constructor(
    @inject("CustomerAuthorizationAccountRepository")
    private customerAuthorizationAccountRepository:
      ICustomerAuthorizationAccountRepository.Implementation
  ) { }

  public async execute(props: ICustomerAuthorizationAccountUseCase.Params):
    ICustomerAuthorizationAccountUseCase.Response {

    const verifyCodeAlreadyExists =
      await this.customerAuthorizationAccountRepository.findByCode({
        code: props.code,
      });

    if (!verifyCodeAlreadyExists?.id) {
      throw new CustomerBusinessException("code does not exists", 403);
    }
    console.log({
      code: props.code,
      userId: verifyCodeAlreadyExists.userId,
      customerId: props.customerId
    });

    if (verifyCodeAlreadyExists.userId !== props.customerId) {
      throw new CustomerBusinessException("code incorrect", 403);
    }

    const findPermissions =
      await this.customerAuthorizationAccountRepository.findPermissions({
        level: 0,
      })

    const findRole = await this.customerAuthorizationAccountRepository.findRoles({
      level: 0,
    })

    if (!findPermissions && !findRole) {
      throw new CustomerBusinessException("Permissions does not exist", 404);
    }

    const customerAuthorizationAccountResponse =
      await this.customerAuthorizationAccountRepository.update({
        customerId: props.customerId,
        status: AccountStatusEnum.Active,
        permissions: findPermissions!,
        roles: findRole!
      });

    return customerAuthorizationAccountResponse;
  };
}