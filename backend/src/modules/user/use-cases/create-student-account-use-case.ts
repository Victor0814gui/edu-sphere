import { User } from "../../../aplication/entities/user";
import { UserValidatorParams } from "../infra/validators/create";
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
    @inject("UserValidatorParams")
    private userValidatorParams: UserValidatorParams,
    @inject("CreateUserAccountRepository")
    private createUserAccountRepository: ICreateUserAccountRepository.Implementation
  ) { }

  async execute(props: ICreateStudentAccountUseCase.Params):
    Promise<ICreateStudentAccountUseCase.Response> {

    this.userValidatorParams.validate(props)

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