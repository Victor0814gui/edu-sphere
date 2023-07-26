
import { Request, Response } from "express";
import { container } from "tsyringe"
import { CreateSuportAccountUseCase } from "../../../use-cases/create-suport-account-use-case";
import { User } from "../../../../../aplication/entities/user";



namespace ICreateSuportAccountController {
  export interface Request {
    name: string;
    email: string;
    password: string;
    avatarUrl: string;
  }

  export interface Response extends User { }
}


export class CreateSuportAccountController {

  async handler(request: Request, response: Response) {
    const { avatarUrl, email, name, password } = request.body as ICreateSuportAccountController.Request;

    const createSuportAccountUseCase = container.resolve(CreateSuportAccountUseCase);

    const createSuportAccountUseCaseResponse = await createSuportAccountUseCase.execute({
      avatarUrl,
      password,
      email,
      name,
    })

    return response.json(createSuportAccountUseCaseResponse);
  }
}