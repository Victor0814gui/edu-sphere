import { Request, Response } from "express"
import { container } from "tsyringe"
import { Role } from "@/src/aplication/entities/role";
import { ListRoleUseCase } from "@modules/user/use-cases/list-roles-use-cases";





export class ListRoleController {
  async handler(request: Request, response: Response):
    Promise<Response> {
    const listRoleUseCaseIntance = container.resolve(ListRoleUseCase);

    const listRoleUseCaseIntanceResponse = await listRoleUseCaseIntance.execute({})

    return response.status(201).json(listRoleUseCaseIntanceResponse);
  }
}