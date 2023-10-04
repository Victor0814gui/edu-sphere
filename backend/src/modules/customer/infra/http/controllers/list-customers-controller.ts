import { Request, Response } from "express"
import { container } from "tsyringe"
import { ListCustomersUseCase } from "@customer/use-cases/list-customers-use-case";





export class ListCustomersController {
  public async handler(request: Request, response: Response):
    Promise<Response> {
    const listCustomersUseCaseIntance = container.resolve(ListCustomersUseCase);

    const listCustomersUseCaseIntanceResponse = await listCustomersUseCaseIntance.execute({})

    return response.status(201).json(listCustomersUseCaseIntanceResponse);
  }
}