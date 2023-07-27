import { inject, injectable } from "tsyringe";
import { ICreateUserAccountRepository } from "../repositories/i-create-user-account-repository";
import { UserValidatorParams } from "../infra/validators/create";
import { User } from "@/src/aplication/entities/user";
import crypto from "crypto";
import AppErrors from "@/src/shared/infra/errors/app-errors";

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

    const verifyRoleAlreayExists = await this.createUserAccountRepository.findUniqueRole({
      name: process.env.ROLES_SUPORT as string,
    })

    if (!verifyRoleAlreayExists?.id) {
      throw new AppErrors("role does not exists", 404);
    }

    const verifyUserAlreayExists = await this.createUserAccountRepository.findUnique({
      email: props.email
    })

    if (!verifyUserAlreayExists?.id) {
      throw new Error("account already exists");
    }

    const createSuportResponse = await this.createUserAccountRepository.create({
      id: crypto.randomUUID(),
      createdAt: new Date(),
      avatarUrl: props.avatarUrl,
      email: props.email,
      name: props.name,
      password: props.password,
    })

    const updateStudentAddRoleAndPermissionsResponse = await this.createUserAccountRepository.update({
      id: createSuportResponse.id,
      permissions: verifyRoleAlreayExists.permissions,
      role: verifyRoleAlreayExists.name,
    })
    return updateStudentAddRoleAndPermissionsResponse;
  }
}