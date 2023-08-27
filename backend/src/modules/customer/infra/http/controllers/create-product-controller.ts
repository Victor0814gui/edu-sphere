import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProductUseCase } from "@customer/use-cases/create-product-use-case";



interface CreateProductControllerRequest {
  userId: string;
  permiissions: string[];
  name: string;
  type: string;
  status: string;
  startDate: Date;
  endDate: Date;
  paymentMethod: string;
  price: number;
  billingCycle: string;
  nextBilling: Date;
  autoRenew: boolean;
  paymentDetails: string;
}

export class CreateProductController {
  public async handler(request: Request, response: Response) {
    const body = request.body as CreateProductControllerRequest;
    const createProductUseCaseIntance = container.resolve(CreateProductUseCase);

    const createProductUseCaseIntanceResponse =
      await createProductUseCaseIntance.execute({
        permiissions: body.permiissions,
        name: body.name,
        userId: body.userId,
        type: body.type,
        status: body.status,
        startDate: body.startDate,
        endDate: body.endDate,
        paymentMethod: body.paymentMethod,
        price: body.price,
        billingCycle: body.billingCycle,
        nextBilling: body.nextBilling,
        autoRenew: body.autoRenew,
        paymentDetails: body.paymentDetails,
      })

    return response.json(createProductUseCaseIntanceResponse);
  }
}