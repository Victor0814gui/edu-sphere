import { verify } from "jsonwebtoken";
import { AccountStatusEnum } from "../interfaces/enums/account-status-enum";
import { ICustomerAuthorizationAccountUseCase } from "../interfaces/i-customer-authorization-account-use-case";
import { ICustomerAuthorizationAccountRepository } from "../repositories/i-customer-authorization-account-repository";
import { CustomerBusinessException } from "../infra/exception/business-exception";



export class CustomerAuthorizationAccountUseCase
  implements ICustomerAuthorizationAccountUseCase.Implementation {
  constructor(
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