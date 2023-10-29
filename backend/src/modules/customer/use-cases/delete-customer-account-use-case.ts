import { inject, injectable } from "tsyringe"
import { CustomerBusinessException } from "@customer/infra/exceptions/business-exception";
import { CustomerValidatorParams } from "../infra/validators/create";
import { ICreateCustomerAccountRepository } from "../repositories/i-create-customer-account-repository";
import { IDeleteUserAccountUseCase } from "../interfaces/i-delete-customer-account-use-case";
import { IDeleteCustomerAccountRepository } from "../repositories/i-delete-customer-account-repository";



@injectable()
export class DeleteUserAccountUseCase
  implements IDeleteUserAccountUseCase.Implementation {

  constructor(
    @inject("DeleteCustomerAccountRepository")
    private deleteCustomerAccountRepository: IDeleteCustomerAccountRepository.Implementation,
  ) { }

  public async execute(props: IDeleteUserAccountUseCase.Params):
    IDeleteUserAccountUseCase.Response {

    const verifyUserAlreadyExists =
      await this.deleteCustomerAccountRepository.findById(props)

    if (!verifyUserAlreadyExists?.id) {
      throw new CustomerBusinessException("user does not exists", 400);
    }

    await this.deleteCustomerAccountRepository.delete({
      customerId: verifyUserAlreadyExists.id,
    })

    return {
      message: "customer deleted successfully",
      code: 200,
    };
  }
}