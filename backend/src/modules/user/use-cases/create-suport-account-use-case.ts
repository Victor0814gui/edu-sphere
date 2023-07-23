import { inject, injectable } from "tsyringe";
import { ICreateUserAccountRepository } from "../repositories/i-create-user-account-repository";
import { UserValidatorParams } from "../infra/validators/create";


namespace ICreateSuportAccountUseCase {
  export interface Params {
    name: string;
    email: string;
    password: string;
    avatarUrl: string;
  }
}

@injectable()
export class CreateSuportAccountUseCase {
  constructor(
    @inject("UserValidatorParams")
    private userValidatorParams: UserValidatorParams,
    @inject("CreateUserAccountRepository")
    private createUserAccountRepository: ICreateUserAccountRepository.Implementation
  ) { }

  async execute(props: ICreateSuportAccountUseCase.Params) {
    this.userValidatorParams.validate(props)

    const verifyUserAlreayExists = await this.createUserAccountRepository.findUnique({
      id: props.email
    })

    if (!verifyUserAlreayExists?.id) {
      throw new Error("account already exists");
    }

    const createSuportResponse = await this.createUserAccountRepository.create({
      avatarUrl: props.avatarUrl,
      email: props.email,
      name: props.name,
      password: props.password,
      level: 2,
    })

    return createSuportResponse;
  }
}