import { User } from "@aplication/entities/user";
import { UserValidatorParams } from "../infra/validators/create";
import { ICreateUserAccountRepository } from "../repositories/i-create-user-account-repository";
import { inject, injectable } from "tsyringe"
import crypto from "crypto";
import AppErrors from "@/src/shared/infra/errors/app-errors";


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

    const verifyRoleAlreayExists = await this.createUserAccountRepository.findUniqueRole({
      name: process.env.ROLES_TEACHER as string,
    })

    if (!verifyRoleAlreayExists?.id) {
      throw new AppErrors("role does not exists", 404);
    }

    const verifyTeacherAlreayExists = await this.createUserAccountRepository.findUnique({
      email: props.email
    });

    if (verifyTeacherAlreayExists?.id) {
      throw new AppErrors("account already exists");
    }

    const createTeachertResponse = await this.createUserAccountRepository.create({
      id: crypto.randomUUID(),
      createdAt: new Date(),
      avatarUrl: props.avatarUrl,
      email: props.email,
      name: props.name,
      password: props.password,
    });

    const updateStudentAddRoleAndPermissionsResponse = await this.createUserAccountRepository.update({
      id: createTeachertResponse.id,
      permissions: verifyRoleAlreayExists.permissions,
      role: verifyRoleAlreayExists.name,
    })
    return updateStudentAddRoleAndPermissionsResponse;
  }
}