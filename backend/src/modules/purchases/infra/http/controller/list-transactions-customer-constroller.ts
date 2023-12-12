import { Request, Response } from "express"
import { container } from "tsyringe";
import { ListTransactionsCustomerUseCase } from "../../../use-cases/list-transactions-customer-use-case";


type ListTransactionsCustomerControllerParams = {
  customerId: string;
}

export class ListTransactionsCustomerController {
  public async handler(request: Request, response: Response):
    Promise<Response> {

    const query = request.query as ListTransactionsCustomerControllerParams;

    const listTransactionsCustomerUseCase =
      container.resolve(ListTransactionsCustomerUseCase);

    const listTransactionsCustomerUseCaseResponse =
      await listTransactionsCustomerUseCase.execute(query);

    return response.json(listTransactionsCustomerUseCaseResponse);
  }
}