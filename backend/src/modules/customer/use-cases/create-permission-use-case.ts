import { injectable, inject } from "tsyringe";
import { ICreatePermissionUseCase } from "../interfaces/i-create-permission-use-case";
import { ICreatePermissionRepository } from "../repositories/i-create-permission-repository";
import UserBusinessException from "@customer/infra/exception/business-exception";
import crypto from "crypto";
import { ICreateNewDateService } from "../infra/services/contracts/i-create-new-date-service";
import { ICreateUUIDTokenService } from "../infra/services/contracts/i-create-uuid-token-service";



@injectable()
export class CreatePermissionUseCase
  implements ICreatePermissionUseCase.Implementation {
  constructor(
    @inject("CreatePermissionRepository")
    private createPermissionRepository: ICreatePermissionRepository.Implementation,
    @inject("CreateNewDateService")
    private createNewDateService: ICreateNewDateService.Implementation,
    @inject("CreateUUIDTokenService")
    private createUUIDTokenService: ICreateUUIDTokenService.Implementation,
  ) { }
  async execute(props: ICreatePermissionUseCase.Params):
    ICreatePermissionUseCase.Response {

    const verifyPermissionAlreayExists = await this.createPermissionRepository.findUnique({
      name: props.name,
    })

    if (verifyPermissionAlreayExists?.id) {
      throw new UserBusinessException("Permission already exists", 409)
    }

    const permissionId = this.createUUIDTokenService.create({})
    const permissionCreatedAt = this.createNewDateService.create({})


    const createPermissionServiceResponse = await this.createPermissionRepository.create({
      name: props.name,
      description: props.description,
      level: props.level,
      createdAt: permissionCreatedAt,
      id: permissionId,
    })

    return createPermissionServiceResponse;
  }
} 