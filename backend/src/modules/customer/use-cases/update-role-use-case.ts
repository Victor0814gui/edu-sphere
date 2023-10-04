import { injectable, inject } from "tsyringe";
import { IUpdateRoleUseCase } from "../interfaces/i-update-role-use-case";
import { IUpdateRoleRepository } from "../repositories/i-update-role-repository";
import { CustomerBusinessException } from "../infra/exceptions/business-exception";



@injectable()
export class UpdateRoleUseCase
  implements IUpdateRoleUseCase.Implementation {
  constructor(
    @inject("UpdateRoleRepository")
    private updateRoleRepository: IUpdateRoleRepository.Implementation,
  ) { }

  async execute(props: IUpdateRoleUseCase.Params):
    IUpdateRoleUseCase.Response {
    const verifyRoleAlreayExists = await this.updateRoleRepository.findUnique({
      name: props.name
    })

    if (!verifyRoleAlreayExists?.id) {
      throw new CustomerBusinessException("role does not exists", 404);
    }

    const permissions = props.permissions.map((permission: string) => ({ name: permission }))
    console.log({ permissions })

    const updateRoleServiceResponse = await this.updateRoleRepository.update({
      ...props,
      updatedAt: new Date(),
      permissions,
    })

    const permissionsServiceResponse = updateRoleServiceResponse
      .permissions
      .map((permission) => permission.name)

    return {
      ...updateRoleServiceResponse,
      permissions: permissionsServiceResponse
    };
  }
} 