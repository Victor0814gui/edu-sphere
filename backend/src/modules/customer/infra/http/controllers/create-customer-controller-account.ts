import { Request, Response } from "express";
import { container } from "tsyringe"
import { CreateCustomerAccountUseCase } from "@customer/use-cases/create-customer-account-use-case";
import { User } from "@aplication/entities/user";



interface ICreateUserAccountControllerParams {
  role: string;
  name: string;
  email: string;
  password: string;
  avatarUrl: string;
}


export class CreateCustomerAccountController {

  async handler(request: Request, response: Response): Promise<Response> {
    const body = request.body as ICreateUserAccountControllerParams;

    const createCustomerAccountUseCase = container.resolve(CreateCustomerAccountUseCase);

    const createCustomerAccountUseCaseResponse = await createCustomerAccountUseCase.execute({
      role: body.role,
      avatarUrl: body.avatarUrl,
      password: body.password,
      email: body.email,
      name: body.name,
    })

    return response.json(createCustomerAccountUseCaseResponse);
  }
}