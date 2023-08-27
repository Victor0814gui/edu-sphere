import { inject, injectable } from "tsyringe"
import UserBusinessException from "@customer/modules/user/infra/exception/business-exception";
import { UserValidatorParams } from "../infra/validators/create";
import { ICreateUserAccountRepository } from "../repositories/i-create-customer-repository";
import { IDeleteUserAccountUseCase } from "../interfaces/i-delete-customer-account-use-case";



@injectable()
export class DeleteUserAccountUseCase
  implements IDeleteUserAccountUseCase.Implementation {

  constructor(
    @inject("UserValidatorParams")
    private userValidatorParams: UserValidatorParams,
    @inject("CreateUserAccountRepository")
    private createUserAccountRepository: ICreateUserAccountRepository.Implementation,
  ) { }

  public async execute(props: IDeleteUserAccountUseCase.Params):
    Promise<IDeleteUserAccountUseCase.Response> {

    const verifyUserAlreayExists = await this.createUserAccountRepository.findUnique({
      email: props.email,
    })

    if (!verifyUserAlreayExists?.id) {
      throw new UserBusinessException("user does not exists", 400);
    }

    await this.createUserAccountRepository.delete({
      id: verifyUserAlreayExists.id,
    })

    return {
      message: "customer deleted successfully",
      code: 200,
    };
  }
}