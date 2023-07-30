import crypto from "crypto";
import { inject, injectable } from "tsyringe"
import AppErrors from "@/src/shared/infra/errors/app-errors";
import { User } from "@aplication/entities/user";
import { UserValidatorParams } from "../infra/validators/create";
import { ICreateUserAccountRepository } from "../repositories/i-create-user-repository";
import { CreateSessionTokenSecurity } from "../infra/security/create-session-token-security";
import { GenerateRefreshToken } from "../infra/security/create-refresh-token-security";

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
      throw new AppErrors("user does not exists", 400);
    }

    await this.createUserAccountRepository.delete({
      id: verifyUserAlreayExists.id,
    })

    return {};
  }
}