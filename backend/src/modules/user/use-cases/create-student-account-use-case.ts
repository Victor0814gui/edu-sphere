import AppErrors from "@/src/shared/infra/errors/app-errors";
import { User } from "../../../aplication/entities/user";
import { UserValidatorParams } from "../infra/validators/create";
import { ICreateUserAccountRepository } from "../repositories/i-create-user-account-repository";
import { inject, injectable } from "tsyringe"
import crypto from "crypto";

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

  public async execute(props: ICreateStudentAccountUseCase.Params):
    Promise<ICreateStudentAccountUseCase.Response> {

    this.userValidatorParams.validate(props)

    const verifyRoleAlreayExists = await this.createUserAccountRepository.findUniqueRole({
      name: process.env.ROLES_STUDENT as string,
    })

    if (!verifyRoleAlreayExists?.id) {
      throw new AppErrors("role does not exists", 404);
    }

    const verifyUserAlreayExists = await this.createUserAccountRepository.findUnique({
      email: props.email
    })

    if (verifyUserAlreayExists?.id) {
      throw new AppErrors("estudent already exists", 400);
    }

    const createStudentResponse = await this.createUserAccountRepository.create({
      id: crypto.randomUUID(),
      avatarUrl: props.avatarUrl,
      email: props.email,
      name: props.name,
      password: props.password,
      createdAt: new Date(),
    })

    const updateStudentAddRoleAndPermissionsResponse = await this.createUserAccountRepository.update({
      id: createStudentResponse.id,
      permissions: verifyRoleAlreayExists.permissions,
      role: verifyRoleAlreayExists.name,
    })
    return updateStudentAddRoleAndPermissionsResponse;
  }
}