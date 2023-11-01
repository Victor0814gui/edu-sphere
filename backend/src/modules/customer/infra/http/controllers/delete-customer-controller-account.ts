import { Request, Response } from "express";
import { container } from "tsyringe"
import { DeleteUserAccountUseCase } from "@customer/use-cases/delete-customer-account-use-case";


type IDeleteUserAccountControllerParams = {
  customerId: string;
}


export class DeleteUserAccountController {
  public async handler(request: Request, response: Response): Promise<Response> {
    const body = request.body as IDeleteUserAccountControllerParams;

    const deleteUserAccountUseCase = container.resolve(DeleteUserAccountUseCase);

    const deleteUserAccountUseCaseResponse =
      await deleteUserAccountUseCase.execute(body)

    return response.json(deleteUserAccountUseCaseResponse);
  }
}