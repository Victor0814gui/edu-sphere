import crypto from "crypto";
import { injectable, inject } from "tsyringe";
import { ICreateRoleUseCase } from "../interfaces/i-create-role-use-case";
import { ICreateRoleRepository } from "../repositories/i-create-role-repository";
import { CustomerBusinessException } from "@customer/infra/exceptions/business-exception";
import { ICreateUUIDTokenService } from "../infra/services/contracts/i-create-uuid-token-service";
import { ICreateNewDateService } from "../infra/services/contracts/i-create-new-date-service";



@injectable()
export class CreateRoleUseCase
  implements ICreateRoleUseCase.Implementation {
  constructor(
    @inject("CreateRoleRepository")
    private createRoleRepository: ICreateRoleRepository.Implementation,
    @inject("CreateUUIDTokenService")
    private createUUIDTokenService: ICreateUUIDTokenService.Implementation,
    @inject("CreateNewDateService")
    private createNewDateService: ICreateNewDateService.Implementation,
  ) { }
  async execute(props: ICreateRoleUseCase.Params): ICreateRoleUseCase.Response {

    const verifyRoleAlreayExists = await this.createRoleRepository.findUnique({
      name: props.name,
    });

    if (verifyRoleAlreayExists?.id) {
      throw new CustomerBusinessException("role already exists", 409)
    }

    const roleId = this.createUUIDTokenService.create();
    const roleCreatedAt = this.createNewDateService.create();

    const createRoleServiceResponse = await this.createRoleRepository.create({
      name: props.name,
      description: props.description,
      level: props.level,
      createdAt: roleCreatedAt,
      id: roleId,
    });

    return createRoleServiceResponse;
  }
} 