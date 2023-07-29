
import { Request, Response } from "express";
import { container } from "tsyringe"
import { CreateStudentAccountUseCase } from "@user/use-cases/create-student-account-use-case";
import { User } from "@aplication/entities/user";



namespace ICreateStudentAccountController {
  export interface Request {
    role: string;
    name: string;
    email: string;
    password: string;
    avatarUrl: string;
  }

  export interface Response extends User { }
}


export class CreateStudentAccountController {

  async handler(request: Request, response: Response) {
    const { avatarUrl, email, name, password } = request.body as ICreateStudentAccountController.Request;

    const createStudentAccountUseCase = container.resolve(CreateStudentAccountUseCase);

    const createStudentAccountUseCaseResponse = await createStudentAccountUseCase.execute({
      avatarUrl,
      password,
      email,
      name,
    })

    return response.json(createStudentAccountUseCaseResponse);
  }
}