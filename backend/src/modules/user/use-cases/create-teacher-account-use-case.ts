import { User } from "../../../aplication/entities/user";
import { ICreateUserAccountRepository } from "../repositories/i-create-user-account-repository";


namespace ICreateTeacherAccountUseCase {
  export interface Params {
    name: string;
    email: string;
    password: string;
    avatarUrl: string;
  }

  export interface Response extends User { };
}


export class CreateTeacherAccountUseCase {
  constructor(
    private createUserAccountRepository: ICreateUserAccountRepository.Implementation
  ) { }

  async execute(props: ICreateTeacherAccountUseCase.Params):
    Promise<ICreateTeacherAccountUseCase.Response> {
    const verifyTeacherAlreayExists = await this.createUserAccountRepository.findUnique({
      id: props.email
    })

    if (!verifyTeacherAlreayExists?.id) {
      throw new Error("teacher already exists");
    }

    const createTeachertResponse = await this.createUserAccountRepository.create({
      avatarUrl: props.avatarUrl,
      email: props.email,
      name: props.name,
      password: props.password,
      level: 1,
    })

    return createTeachertResponse;
  }
}