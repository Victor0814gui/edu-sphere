
import { Request, Response } from "express";
import { container } from "tsyringe"
import { User } from "@aplication/entities/user";
import { DeleteUserAccountUseCase } from "@customer/use-cases/delete-customer-account-use-case";



namespace IDeleteUserAccountController {
  export interface Request {
    email: string;
  }
  export interface Response extends User { }
}


export class DeleteUserAccountController {
  async handler(request: Request, response: Response): Promise<Response> {
    const body = request.body as IDeleteUserAccountController.Request;

    const deleteUserAccountUseCaseInstance = container.resolve(DeleteUserAccountUseCase);

    await deleteUserAccountUseCaseInstance.execute({
      email: body.email
    })

    return response.json({
      type: "sucess",
      message: "customer deleted successfully"
    });
  }
}