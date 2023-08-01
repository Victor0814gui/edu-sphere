import { injectable, inject } from "tsyringe";
import { IListPermissionsUseCase } from "../interfaces/i-list-permissions-use-case";
import { ICreatePermissionRepository } from "../repositories/i-create-permission-repository";



@injectable()
export class ListPermissionsUseCase
  implements IListPermissionsUseCase.Implementation {
  constructor(
    @inject("CreatePermissionRepository")
    private createPermissionRepository: ICreatePermissionRepository.Implementation,
  ) { }
  async execute(props: IListPermissionsUseCase.Params):
    Promise<IListPermissionsUseCase.Response | null> {

    const createPermissionsServiceResponse = await this.createPermissionRepository.list({})


    return createPermissionsServiceResponse;
  }
} 