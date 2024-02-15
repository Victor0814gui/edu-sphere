import { Request, Response } from "express"
import { container } from "tsyringe";
import { ListTransactionsCustomerUseCase } from "@purchases/use-cases/list-transactions-customer-use-case";


export class ListTransactionsCustomerController {
  public async handler(request: Request, response: Response):
    Promise<Response> {

    const customerId = request.customerId;

    const listTransactionsCustomerUseCase =
      container.resolve(ListTransactionsCustomerUseCase);

    const listTransactionsCustomerUseCaseResponse =
      await listTransactionsCustomerUseCase.execute({
        customerId,
      });

    return response.json(listTransactionsCustomerUseCaseResponse);
  }
}