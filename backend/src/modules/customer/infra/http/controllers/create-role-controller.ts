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
    const body = request.body as ICreateRoleControllerParams;
    const createRoleUseCase = container.resolve(CreateRoleUseCase);

    const createRoleUseCaseResponse =
      await createRoleUseCase.execute(body)

    return response.status(201).json(createRoleUseCaseResponse);
  }
}