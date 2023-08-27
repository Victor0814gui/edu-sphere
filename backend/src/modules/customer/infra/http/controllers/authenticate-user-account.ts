
import { Request, Response } from "express"
import { container } from "tsyringe"
import { AuthenticationCustomerUserCase } from "@customer/use-cases/authentication-customer-use-case"


interface AuthenticationCustomerControllerParams {
  email: string;
  password: string;
}


export class AuthenticationCustomerController {
  async handler(request: Request, response: Response) {

    const body = request.body as AuthenticationCustomerControllerParams
    const authenticationCustomerUserCaseInstance = container.resolve(AuthenticationCustomerUserCase)

    const authenticationCustomerUserCaseInstanceResponse =
      await authenticationCustomerUserCaseInstance.execute({
        email: body.email,
        password: body.password,
      })

    return response.json(authenticationCustomerUserCaseInstanceResponse);
  }
}