import { User } from "../../../aplication/entities/user";
import { ICreateUserAccountRepository } from "../repositories/i-create-user-account-repository";
import { inject, injectable } from "tsyringe"


namespace ICreateStudentAccountUseCase {
  export interface Params {
    name: string;
    email: string;
    password: string;
    avatarUrl: string;
  }

  export interface Response extends User { }
}


@injectable()
export class CreateStudentAccountUseCase {
  constructor(
    @inject("CreateUserAccountRepository")
    @inject("database")
    private createUserAccountRepository: ICreateUserAccountRepository.Implementation
  ) { }

  async execute(props: ICreateStudentAccountUseCase.Params):
    Promise<ICreateStudentAccountUseCase.Response> {

    const verifyUserAlreayExists = await this.createUserAccountRepository.findUnique({
      id: props.email
    })

    if (!verifyUserAlreayExists?.id) {
      throw new Error("estudent already exists");
    }

    const createStudentResponse = await this.createUserAccountRepository.create({
      avatarUrl: props.avatarUrl,
      email: props.email,
      name: props.name,
      password: props.password,
      level: 0,
    })
    return createStudentResponse;
  }
}