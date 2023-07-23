import { ICreateUserAccountRepository } from "../repositories/i-create-user-account-repository";
import { inject, injectable } from "tsyringe"


namespace ICreateAdminAccountUseCase {
  export interface Params {
    name: string;
    email: string;
    password: string;
    avatarUrl: string;
  }
}

@injectable()
export class CreateAdminAccountUseCase {
  constructor(
    @inject("CreateUserAccountRepository")
    private createUserAccountRepository: ICreateUserAccountRepository.Implementation
  ) { }

  async execute(props: ICreateAdminAccountUseCase.Params) {
    const verifyUserAlreayExists = await this.createUserAccountRepository.findUnique({
      id: props.email
    })

    if (!verifyUserAlreayExists?.id) {
      throw new Error("eAdmin already exists");
    }

    const createAdminResponse = await this.createUserAccountRepository.create({
      avatarUrl: props.avatarUrl,
      email: props.email,
      name: props.name,
      password: props.password,
      level: 4,
    })

    return createAdminResponse;
  }
}