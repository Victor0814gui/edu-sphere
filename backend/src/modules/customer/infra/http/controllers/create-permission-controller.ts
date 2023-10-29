import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreatePermissionUseCase } from "@customer/use-cases/create-permission-use-case"
import { Permission } from "@/src/shared/application/entities/permission";


interface ICreatePermissionControllerParams {
  name: string;
  description: string;
  level: number;
}




export class CreatePermissionController {
  public async handler(request: Request, response: Response): Promise<Response> {
    const { description, level, name } = request.body as ICreatePermissionControllerParams;
    const createPermissionUseCaseIntance = container.resolve(CreatePermissionUseCase);

    const createPermissionUseCaseIntanceResponse = await createPermissionUseCaseIntance.execute({
      description,
      level,
      name,
    });

    return response.status(201).json(createPermissionUseCaseIntanceResponse);
  }
}