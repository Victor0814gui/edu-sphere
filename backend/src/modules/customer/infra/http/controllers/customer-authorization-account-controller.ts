import { Request, Response } from "express";
import { container } from "tsyringe";
import { CustomerAuthorizationAccountUseCase } from "../../../use-cases/customer-authorization-account-use-case";

type CustomerAuthorizationAccountControllerParams = {
  token: string;
}

export class CustomerAuthorizationAccountController {

  public async handler(request: Request, response: Response):
    Promise<Response> {

    const body = request.body as CustomerAuthorizationAccountControllerParams

    const customerAuthorizationAccountUseCase =
      container.resolve(CustomerAuthorizationAccountUseCase);

    const customerAuthorizationAccountUseCaseResponse =
      await customerAuthorizationAccountUseCase.execute(body);

    return response.json(customerAuthorizationAccountUseCaseResponse);
  };
}