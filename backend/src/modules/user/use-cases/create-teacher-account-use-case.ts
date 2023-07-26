import { User } from "@aplication/entities/user";
import { UserValidatorParams } from "../infra/validators/create";
import { ICreateUserAccountRepository } from "../repositories/i-create-user-account-repository";
import { inject, injectable } from "tsyringe"
import crypto from "crypto";


namespace ICreateTeacherAccountUseCase {
  export interface Params {
    name: string;
    email: string;
    password: string;
    avatarUrl: string;
  }

  export interface Response extends User { };
}

@injectable()
export class CreateTeacherAccountUseCase {
  constructor(
    @inject("UserValidatorParams")
    private userValidatorParams: UserValidatorParams,
    @inject("CreateUserAccountRepository")
    private createUserAccountRepository: ICreateUserAccountRepository.Implementation
  ) { }

  public async execute(props: ICreateTeacherAccountUseCase.Params):
    Promise<ICreateTeacherAccountUseCase.Response> {

    this.userValidatorParams.validate(props);

    const verifyTeacherAlreayExists = await this.createUserAccountRepository.findUnique({
      id: props.email
    });

    if (!verifyTeacherAlreayExists?.id) {
      throw new Error("account already exists");
    }

    const createTeachertResponse = await this.createUserAccountRepository.create({
      id: crypto.randomUUID(),

      avatarUrl: props.avatarUrl,
      email: props.email,
      name: props.name,
      password: props.password,
      level: 1,
    });

    return createTeachertResponse;
  }
}