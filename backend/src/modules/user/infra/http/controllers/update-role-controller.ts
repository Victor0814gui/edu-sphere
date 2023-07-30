import { Request, Response } from "express"
import { container } from "tsyringe"
import { UpdateRoleUseCase } from "@modules/user/use-cases/update-role-use-case";
import { Role } from "@prisma/client";




interface IupdateRoleControllerParams extends Role {
  permissions: string[];
}




export class UpdateRoleController {
  async handler(request: Request, response: Response):
    Promise<Response> {
    const body = request.body as IupdateRoleControllerParams
    const updateRoleUseCaseIntance = container.resolve(UpdateRoleUseCase);

    const updateRoleUseCaseIntanceResponse = await updateRoleUseCaseIntance.execute({
      ...body
    })

    return response.status(201).json(updateRoleUseCaseIntanceResponse);
  }
}