
import { Request, Response } from "express";
import { container } from "tsyringe"
import { CreateUserAccountUseCase } from "@/src/modules/user/use-cases/create-customer-account-use-case";
import { User } from "@aplication/entities/user";



namespace ICreateUserAccountController {
  export interface Request {
    role: string;
    name: string;
    email: string;
    password: string;
    avatarUrl: string;
  }

  export interface Response extends User { }
}


export class CreateUserAccountController {

  async handler(request: Request, response: Response): Promise<Response> {
    const body = request.body as ICreateUserAccountController.Request;

    const createUserAccountUseCase = container.resolve(CreateUserAccountUseCase);

    const createUserAccountUseCaseResponse = await createUserAccountUseCase.execute({
      role: body.role,
      avatarUrl: body.avatarUrl,
      password: body.password,
      email: body.email,
      name: body.name,
    })

    return response.json(createUserAccountUseCaseResponse);
  }
}