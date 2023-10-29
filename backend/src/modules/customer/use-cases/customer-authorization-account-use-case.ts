import { verify } from "jsonwebtoken";
import { injectable, inject } from "tsyringe";
import { AccountStatusEnum } from "../interfaces/enums/account-status-enum";
import { ICustomerAuthorizationAccountUseCase } from "../interfaces/i-customer-authorization-account-use-case";
import { ICustomerAuthorizationAccountRepository } from "../repositories/i-customer-authorization-account-repository";
import { CustomerBusinessException } from "@customer/infra/exceptions/business-exception";



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

    const [, token] = props.token.split(" ");

    const { sub } = verify(token, process.env.JWT_SECRET as string);
    const customerId = sub?.toString()!;

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

    const customerAuthorizationAccountResponse =
      await this.customerAuthorizationAccountRepository.update({
        email: verifyCustomerAlreadyExists.email,
        status: AccountStatusEnum.Active,
      });

    return customerAuthorizationAccountResponse;
  };
}