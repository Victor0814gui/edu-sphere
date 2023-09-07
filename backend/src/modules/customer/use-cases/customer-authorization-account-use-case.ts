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

  async execute(props: ICustomerAuthorizationAccountUseCase.Params):
    ICustomerAuthorizationAccountUseCase.Response {

    const [, token] = props.token.split(" ");

    const { sub } = verify(token, process.env.JWT_SECRET as string);
    const constumerEmail = sub?.toString()!;

    if (!constumerEmail) {
      throw new CustomerBusinessException("Customer does not exist", 404);
    }

    const verifyCustomerAlreadyExists =
      await this.customerAuthorizationAccountRepository.findByEmail({
        email: constumerEmail
      });

    if (!verifyCustomerAlreadyExists?.id) {
      throw new CustomerBusinessException("Customer does not exist", 404);
    }

    await this.customerAuthorizationAccountRepository.update({
      email: constumerEmail,
      status: AccountStatusEnum.Active,
    });

    const customerAuthorizationAccount = {};

    return customerAuthorizationAccount;
  };
}