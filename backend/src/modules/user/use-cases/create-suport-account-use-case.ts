import { ICreateUserAccountRepository } from "../repositories/i-create-user-account-repository";


namespace ICreateSuportAccountUseCase {
  export interface Params {
    name: string;
    email: string;
    password: string;
    avatarUrl: string;
  }
}


export class CreateSuportAccountUseCase {
  constructor(
    private createUserAccountRepository: ICreateUserAccountRepository.Implementation
  ) { }

  async execute(props: ICreateSuportAccountUseCase.Params) {
    const verifyUserAlreayExists = await this.createUserAccountRepository.findUnique({
      id: props.email
    })

    if (!verifyUserAlreayExists?.id) {
      throw new Error("eSuport already exists");
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