
import { Request, Response } from "express";
import { container } from "tsyringe"
import { User } from "@/src/shared/application/entities/user";
import { DeleteUserAccountUseCase } from "@customer/use-cases/delete-customer-account-use-case";



interface IDeleteUserAccountControllerParams {
  email: string;
}


export class DeleteUserAccountController {
  async handler(request: Request, response: Response): Promise<Response> {
    const body = request.body as IDeleteUserAccountControllerParams;

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