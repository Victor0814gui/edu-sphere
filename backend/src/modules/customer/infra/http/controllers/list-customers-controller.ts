import { Request, Response } from "express"
import { container } from "tsyringe"
import { ListCustomersUseCase } from "@customer/use-cases/list-customers-use-case";





export class ListCustomersController {
  public async handler(request: Request, response: Response):
    Promise<Response> {
    const listCustomersUseCase = container.resolve(ListCustomersUseCase);

    const listCustomersUseCaseResponse = await listCustomersUseCase.execute()

    return response.status(201).json(listCustomersUseCaseResponse);
  }
}