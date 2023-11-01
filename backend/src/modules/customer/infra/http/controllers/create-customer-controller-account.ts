import { Request, Response } from "express";
import { container } from "tsyringe"
import { CreateCustomerAccountUseCase } from "@customer/use-cases/create-customer-account-use-case";
import { User } from "@/src/shared/application/entities/user";



type ICreateUserAccountControllerParams = {
  name: string;
  email: string;
  password: string;
  avatarUrl: string;
}


export class CreateCustomerAccountController {
  public async handler(request: Request, response: Response): Promise<Response> {
    const body = request.body as ICreateUserAccountControllerParams;

    const createCustomerAccountUseCase = container.resolve(CreateCustomerAccountUseCase);

    const createCustomerAccountUseCaseResponse =
      await createCustomerAccountUseCase.execute(body)

    return response.status(201).json(createCustomerAccountUseCaseResponse);
  }
}