
import { container } from "tsyringe"
import { Request, Response } from "express"
import { AuthenticationCustomerUserCase } from "@customer/use-cases/authentication-customer-use-case"


interface AuthenticationCustomerControllerParams {
  email: string;
  password: string;
}


export class AuthenticationCustomerAccountController {
  async handler(request: Request, response: Response) {

    const body = request.body as AuthenticationCustomerControllerParams
    const authenticationCustomerUserCaseInstance = container.resolve(AuthenticationCustomerUserCase)

    const authenticationCustomerUserCaseInstanceResponse =
      await authenticationCustomerUserCaseInstance.execute(body)

    return response.json(authenticationCustomerUserCaseInstanceResponse);
  }
}