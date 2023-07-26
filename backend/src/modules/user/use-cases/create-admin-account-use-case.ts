import AppErrors from "@/src/shared/infra/errors/app-errors";
import { UserValidatorParams } from "../infra/validators/create";
import { ICreateUserAccountRepository } from "../repositories/i-create-user-account-repository";
import { inject, injectable } from "tsyringe"
import { User } from "@/src/aplication/entities/user";
import crypto from "crypto";

namespace ICreateAdminAccountUseCase {
  export interface Params {
    name: string;
    email: string;
    password: string;
    avatarUrl: string;
  }
  export interface Response extends User { }
}

@injectable()
export class CreateAdminAccountUseCase {
  constructor(
    @inject("UserValidatorParams")
    private userValidatorParams: UserValidatorParams,
    @inject("CreateUserAccountRepository")
    private createUserAccountRepository: ICreateUserAccountRepository.Implementation,
  ) { }

  public async execute(props: ICreateAdminAccountUseCase.Params):
    Promise<ICreateAdminAccountUseCase.Response> {
    this.userValidatorParams.validate(props);

    const verifyUserAlreayExists = await this.createUserAccountRepository.findUnique({
      id: props.email
    });

    if (!verifyUserAlreayExists?.id) {
      throw new AppErrors("account already exists");
    }

    const createAdminResponse = await this.createUserAccountRepository.create({
      id: crypto.randomUUID(),
      avatarUrl: props.avatarUrl,
      email: props.email,
      name: props.name,
      password: props.password,
      level: 4,
    });

    return createAdminResponse;
  }
}