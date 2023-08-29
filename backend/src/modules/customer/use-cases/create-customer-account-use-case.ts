import crypto from "crypto";
import { inject, injectable } from "tsyringe"
import { CustomerBusinessException } from "@customer/infra/exception/business-exception";
import { CustomerValidatorParams } from "../infra/validators/create";
import { ICreateCustomerAccountRepository } from "../repositories/i-create-customer-repository";
import { CreateSessionTokenSecurity } from "../infra/security/create-session-token-security";
import { ICreateCustomerAccountUseCase } from "../interfaces/i-create-customer-account-use-case";
import { AccountStatusEnum } from "../interfaces/enums/account-status-enum";



@injectable()
export class CreateCustomerAccountUseCase
  implements ICreateCustomerAccountUseCase.Implementation {
  constructor(
    @inject("CustomerValidatorParams")
    private customerValidatorParams: CustomerValidatorParams,
    @inject("CreateCustomerAccountRepository")
    private createCustomerAccountRepository: ICreateCustomerAccountRepository.Implementation,
  ) { }

  public async execute(props: ICreateCustomerAccountUseCase.Params):
    ICreateCustomerAccountUseCase.Response {

    this.customerValidatorParams.validate(props)

    const verifyCustomerAlreayExists = await this.createCustomerAccountRepository.findUnique({
      email: props.email
    })

    if (verifyCustomerAlreayExists?.id) {
      throw new CustomerBusinessException("Customer already exists", 400);
    }

    const createCustomerResponse = await this.createCustomerAccountRepository.create({
      ...props,
      id: crypto.randomUUID(),
      status: AccountStatusEnum.Pending,
      createdAt: new Date(),
    })


    return createCustomerResponse;
  }
}