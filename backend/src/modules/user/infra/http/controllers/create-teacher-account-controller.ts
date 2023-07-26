
import { Request, Response } from "express";
import { container } from "tsyringe"
import { CreateTeacherAccountUseCase } from "../../../use-cases/create-teacher-account-use-case";
import { User } from "../../../../../aplication/entities/user";



namespace ICreateTeacherAccountController {
  export interface Request {
    name: string;
    email: string;
    password: string;
    avatarUrl: string;
  }

  export interface Response extends User { }
}


export class CreateTeacherAccountController {

  async handler(request: Request, response: Response) {
    const { avatarUrl, email, name, password } = request.body as ICreateTeacherAccountController.Request;

    const createTeacherAccountUseCase = container.resolve(CreateTeacherAccountUseCase);

    const createTeacherAccountUseCaseResponse = await createTeacherAccountUseCase.execute({
      avatarUrl,
      password,
      email,
      name,
    })

    return response.json(createTeacherAccountUseCaseResponse);
  }
}