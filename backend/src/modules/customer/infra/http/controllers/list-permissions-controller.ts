import { Request, Response } from "express"
import { container } from "tsyringe"
import { ListPermissionsUseCase } from "@customer/use-cases/list-permissions-use-case";





export class ListPermissionsController {
  public async handler(request: Request, response: Response):
    Promise<Response> {
    const listPermissionsUseCaseIntance = container.resolve(ListPermissionsUseCase);

    const listPermissionsUseCaseIntanceIntanceResponse = await listPermissionsUseCaseIntance.execute({})

    return response.status(201).json(listPermissionsUseCaseIntanceIntanceResponse);
  }
}