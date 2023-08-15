import { Request, Response } from "express"
import { container } from "tsyringe"
import { Role } from "@/src/aplication/entities/role";
import { CreateRoleUseCase } from "@/src/modules/user/use-cases/create-role-use-case";


namespace ICreateRoleController {
  export interface Params {
    name: string;
    description: string;
    level: number;
  }

  export interface Response extends Role { }
}



export class CreateRoleController {
  async handler(request: Request, response: Response): Promise<Response> {
    const { description, level, name } = request.body as ICreateRoleController.Params;
    const createRoleUseCaseIntance = container.resolve(CreateRoleUseCase);

    const createRoleUseCaseIntanceResponse = await createRoleUseCaseIntance.execute({
      description,
      level,
      name
    })

    return response.status(201).json(createRoleUseCaseIntanceResponse);
  }
}