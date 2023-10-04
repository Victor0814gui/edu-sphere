import { Request, Response } from "express"
import { container } from "tsyringe"
import { UpdateRoleUseCase } from "@customer/use-cases/update-role-use-case";
import { Role } from "@prisma/client";




interface IUpdateRoleControllerParams extends Role {
  permissions: string[];
}


export class UpdateRoleController {
  public async handler(request: Request, response: Response):
    Promise<Response> {
    const body = request.body as IUpdateRoleControllerParams;

    const updateRoleUseCaseIntance = container.resolve(UpdateRoleUseCase);

    const updateRoleUseCaseIntanceResponse =
      await updateRoleUseCaseIntance.execute(body)

    return response.status(201).json(updateRoleUseCaseIntanceResponse);
  }
}