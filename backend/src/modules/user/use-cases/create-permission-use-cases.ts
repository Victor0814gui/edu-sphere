
import { injectable, inject } from "tsyringe";
import { ICreateRoleUseCase } from "../interfaces/i-create-role-use-case";
import { ICreateRoleRepository } from "../repositories/i-create-role-repository";
import AppErrors from "@/src/shared/infra/errors/app-errors";
import crypto from "crypto";



@injectable()
export class CreateRoleUseCase
  implements ICreateRoleUseCase.Implementation {
  constructor(
    @inject("CreateRoleRepository")
    private createRoleRepository: ICreateRoleRepository.Implementation,
  ) { }
  async execute(props: ICreateRoleUseCase.Params):
    Promise<ICreateRoleUseCase.Response> {

    const verifyRoleAlreayExists = await this.createRoleRepository.findUnique({
      name: props.name,
    })

    if (verifyRoleAlreayExists?.id) {
      throw new AppErrors("role already exists", 409)
    }

    const createRoleServiceResponse = await this.createRoleRepository.create({
      name: props.name,
      description: props.description,
      level: props.level,
      createdAt: new Date(),
      id: crypto.randomUUID(),
    })

    return createRoleServiceResponse;
  }
} 