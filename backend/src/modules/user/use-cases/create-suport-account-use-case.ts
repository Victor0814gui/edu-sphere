import { inject, injectable } from "tsyringe";
import { ICreateUserAccountRepository } from "../repositories/i-create-user-account-repository";
import { UserValidatorParams } from "../infra/validators/create";
import { User } from "@/src/aplication/entities/user";
import crypto from "crypto";

namespace ICreateSuportAccountUseCase {
  export interface Params {
    name: string;
    email: string;
    password: string;
    avatarUrl: string;
  }
  export interface Response extends User { }

}

@injectable()
export class CreateSuportAccountUseCase {
  constructor(
    @inject("UserValidatorParams")
    private userValidatorParams: UserValidatorParams,
    @inject("CreateUserAccountRepository")
    private createUserAccountRepository: ICreateUserAccountRepository.Implementation
  ) { }

  public async execute(props: ICreateSuportAccountUseCase.Params):
    Promise<ICreateSuportAccountUseCase.Response> {
    this.userValidatorParams.validate(props)

    const verifyUserAlreayExists = await this.createUserAccountRepository.findUnique({
      id: props.email
    })

    if (!verifyUserAlreayExists?.id) {
      throw new Error("account already exists");
    }

    const createSuportResponse = await this.createUserAccountRepository.create({
      id: crypto.randomUUID(),

      avatarUrl: props.avatarUrl,
      email: props.email,
      name: props.name,
      password: props.password,
      level: 2,
    })

    return createSuportResponse;
  }
}