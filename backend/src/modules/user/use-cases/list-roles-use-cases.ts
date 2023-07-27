
import { injectable, inject } from "tsyringe";
import { IListRoleUseCase } from "../interfaces/i-list-role-use-case";
import { ICreateRoleRepository } from "../repositories/i-create-role-repository";



@injectable()
export class ListRoleUseCase
  implements IListRoleUseCase.Implementation {
  constructor(
    @inject("CreateRoleRepository")
    private createRoleRepository: ICreateRoleRepository.Implementation,
  ) { }
  async execute(props: IListRoleUseCase.Params):
    Promise<IListRoleUseCase.Response | null> {

    const createRoleServiceResponse = await this.createRoleRepository.list({})

    return createRoleServiceResponse;
  }
} 