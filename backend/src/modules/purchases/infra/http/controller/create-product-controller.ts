import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProductUseCase } from "@/src/modules/purchases/use-cases/create-product-use-case";
import { ProductStatus } from "@/src/shared/application/entities/enums/i-product-status";



interface CreateProductControllerRequest {
  description: string;
  name: string;
  status: ProductStatus;
  price: number;
}

export class CreateProductController {
  public async handler(request: Request, response: Response) {
    const body = request.body as CreateProductControllerRequest;
    const createProductUseCase = container.resolve(CreateProductUseCase);

    const createProductUseCaseResponse =
      await createProductUseCase.execute(body);

    return response.json(createProductUseCaseResponse);
  }
}