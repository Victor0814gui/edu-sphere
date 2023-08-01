import { Request, Response } from "express"
import { container } from "tsyringe"
import { ListCustomersUseCase } from "@modules/user/use-cases/list-customers-use-cases";





export class ListCustomersController {
  async handler(request: Request, response: Response):
    Promise<Response> {
    const listCustomersUseCaseIntance = container.resolve(ListCustomersUseCase);

    const listCustomersUseCaseIntanceResponse = await listCustomersUseCaseIntance.execute({})

    return response.status(201).json(listCustomersUseCaseIntanceResponse);
  }
}