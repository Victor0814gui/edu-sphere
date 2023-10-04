
import { container } from "tsyringe";
import { Request, Response } from "express";
import { PurchaseProductToCustomerUseCase } from "@customer/use-cases/purchase-product-to-customer-use-case";



type IPurchaseProductToCustomerControllerParams = {
  productId: string;
}

export class PurchaseProductToCustomerController {
  public async handler(request: Request, response: Response): Promise<Response> {

    const purchaseProductToCustomerUseCaseInstance =
      container.resolve(PurchaseProductToCustomerUseCase);

    const body = request.query as IPurchaseProductToCustomerControllerParams;

    const customerId = request.customerId;

    const purchaseProductToCustomerUseCaseInstanceResponse =
      await purchaseProductToCustomerUseCaseInstance.execute({
        productId: body.productId,
        customerId: customerId
      });

    return response.json(purchaseProductToCustomerUseCaseInstanceResponse);
  };
}