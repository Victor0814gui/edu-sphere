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


    // const [, token] = props.token.split(" ");

    // const { sub } = verify(token, process.env.JWT_SECRET as string);
    // const customerId = sub?.toString()!;
    const customerId = props.token;

    if (!customerId) {
      throw new CustomerBusinessException("Customer does not exist", 404);
    }

    const verifyCustomerAlreadyExists =
      await this.customerAuthorizationAccountRepository.findById({
        customerId: customerId,
      });

    if (!verifyCustomerAlreadyExists?.id) {
      throw new CustomerBusinessException("Customer does not exist", 404);
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
        email: verifyCustomerAlreadyExists.email,
        status: AccountStatusEnum.Active,
        permissions: findPermissions!,
        roles: findRole!
      });

    return customerAuthorizationAccountResponse;
  };
}