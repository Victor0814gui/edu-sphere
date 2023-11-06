import { container } from "tsyringe"
import { Request, Response } from "express";
import { ListProductsUseCase } from "@purchases/use-cases/list-products-use-cases";


export class ListProductsController {
  public async handler(request: Request, response: Response): Promise<Response> {

    const listProductsUseCase = container.resolve(ListProductsUseCase);

    const listProductsUseCaseResponse =
      await listProductsUseCase.execute()

    return response.json(listProductsUseCaseResponse);
  }
}