import { Request, Response } from "express"
import { container } from "tsyringe"
import { Role } from "@/src/shared/application/entities/role";
import { CreateRoleUseCase } from "@customer/use-cases/create-role-use-case";


interface ICreateRoleControllerParams {
  name: string;
  description: string;
  level: number;
}



export class CreateRoleController {
  public async handler(request: Request, response: Response): Promise<Response> {
    const { description, level, name } = request.body as ICreateRoleControllerParams;
    const createRoleUseCaseIntance = container.resolve(CreateRoleUseCase);

    const createRoleUseCaseIntanceResponse = await createRoleUseCaseIntance.execute({
      description,
      level,
      name
    })

    return response.status(201).json(createRoleUseCaseIntanceResponse);
  }
}