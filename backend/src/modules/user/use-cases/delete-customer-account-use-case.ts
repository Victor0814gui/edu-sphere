import { inject, injectable } from "tsyringe"
import UserBusinessException from "@/src/modules/user/infra/exception/business-exception";
import { UserValidatorParams } from "../infra/validators/create";
import { ICreateUserAccountRepository } from "../repositories/i-create-user-repository";

namespace IDeleteUserAccountUseCase {
  export interface Params {
    email: string;
  }

  export interface Response { }
}


@injectable()
export class DeleteUserAccountUseCase {
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

    return {};
  }
}