import { Request, Response } from "express"
import { container } from "tsyringe"
import { ListRoleUseCase } from "@modules/user/use-cases/list-roles-use-cases";
import { ListPermissionsUseCase } from "../../../use-cases/list-permissions-use-cases";





export class ListPermissionsController {
  async handler(request: Request, response: Response):
    Promise<Response> {
    const listPermissionsUseCaseIntance = container.resolve(ListPermissionsUseCase);

    const listPermissionsUseCaseIntanceIntanceResponse = await listPermissionsUseCaseIntance.execute({})

    return response.status(201).json(listPermissionsUseCaseIntanceIntanceResponse);
  }
}