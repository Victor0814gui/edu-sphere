import { Request, Response } from "express"
import { container } from "tsyringe"
import { ListRoleUseCase } from "@customer/use-cases/list-roles-use-case";





export class ListRolesController {
  public async handler(request: Request, response: Response):
    Promise<Response> {
    const listRoleUseCaseIntance = container.resolve(ListRoleUseCase);

    const listRoleUseCaseIntanceResponse = await listRoleUseCaseIntance.execute({})

    return response.status(201).json(listRoleUseCaseIntanceResponse);
  }
}