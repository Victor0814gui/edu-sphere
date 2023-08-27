import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreatePermissionUseCase } from "@customer/use-cases/create-permission-use-case"
import { Permission } from "@/src/aplication/entities/permission";


namespace ICreatePermissionController {
  export interface Params {
    name: string;
    description: string;
    level: number;
  }

  export interface Response extends Permission { }
}




export class CreatePermissionController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { description, level, name } = request.body as ICreatePermissionController.Params;
    const createPermissionUseCaseIntance = container.resolve(CreatePermissionUseCase);

    const createPermissionUseCaseIntanceResponse = await createPermissionUseCaseIntance.execute({
      description,
      level,
      name
    })

    return response.status(201).json(createPermissionUseCaseIntanceResponse);
  }
}