import { inject, injectable } from "tsyringe"
import { CustomerBusinessException } from "@customer/infra/exception/business-exception";
import { CustomerValidatorParams } from "../infra/validators/create";
import { ICreateCustomerAccountRepository } from "../repositories/i-create-customer-account-repository";
import { IDeleteUserAccountUseCase } from "../interfaces/i-delete-customer-account-use-case";



@injectable()
export class DeleteUserAccountUseCase
  implements IDeleteUserAccountUseCase.Implementation {

  constructor(
    @inject("UserValidatorParams")
    private customerValidatorParams: CustomerValidatorParams,
    @inject("CreateUserAccountRepository")
    private createCustomerAccountRepository: ICreateCustomerAccountRepository.Implementation,
  ) { }

  public async execute(props: IDeleteUserAccountUseCase.Params):
    Promise<IDeleteUserAccountUseCase.Response> {

    const verifyUserAlreayExists = await this.createCustomerAccountRepository.findUnique({
      email: props.email,
    })

    if (!verifyUserAlreayExists?.id) {
      throw new CustomerBusinessException("user does not exists", 400);
    }

    // await this.createCustomerAccountRepository.delete({
    //   id: verifyUserAlreayExists.id,
    // })

    return {
      message: "customer deleted successfully",
      code: 200,
    };
  }
}