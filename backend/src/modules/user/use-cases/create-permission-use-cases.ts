
import { injectable, inject } from "tsyringe";
import { ICreatePermissionUseCase } from "../interfaces/i-create-permission-use-case";
import { ICreatePermissionRepository } from "../repositories/i-create-permission-repository";
import AppErrors from "@/src/shared/infra/errors/app-errors";
import crypto from "crypto";



@injectable()
export class CreatePermissionUseCase
  implements ICreatePermissionUseCase.Implementation {
  constructor(
    @inject("CreatePermissionRepository")
    private createPermissionRepository: ICreatePermissionRepository.Implementation,
  ) { }
  async execute(props: ICreatePermissionUseCase.Params):
    Promise<ICreatePermissionUseCase.Response> {

    const verifyPermissionAlreayExists = await this.createPermissionRepository.findUnique({
      name: props.name,
    })

    if (verifyPermissionAlreayExists?.id) {
      throw new AppErrors("Permission already exists", 409)
    }

    const createPermissionServiceResponse = await this.createPermissionRepository.create({
      name: props.name,
      description: props.description,
      level: props.level,
      createdAt: new Date(),
      id: crypto.randomUUID(),
    })

    return createPermissionServiceResponse;
  }
} 