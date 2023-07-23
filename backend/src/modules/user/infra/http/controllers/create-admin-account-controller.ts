
import { Request, Response } from "express";
import { container } from "tsyringe"
import { CreateAdminAccountUseCase } from "../../../use-cases/create-admin-account-use-case";
import { User } from "../../../../../aplication/entities/user";



namespace ICreateAdminAccountController {
  export interface Request {
    name: string;
    email: string;
    password: string;
    avatarUrl: string;
  }

  export interface Response extends User { }
}


export class CreateAdminAccountController {

  async handler(request: Request, response: Response) {
    const { avatarUrl, email, name, password } = request.body as ICreateAdminAccountController.Request;

    const createAdminAccountUseCase = container.resolve(CreateAdminAccountUseCase);

    const createAdminAccountUseCaseResponse = createAdminAccountUseCase.execute({
      avatarUrl,
      password,
      email,
      name,
    })

    return response.json(createAdminAccountUseCaseResponse);
  }
}