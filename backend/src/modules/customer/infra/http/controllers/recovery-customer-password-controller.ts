import { container } from "tsyringe";
import { Request,Response } from "express";
import { RecoveryCustomerPasswordUseCase } from "../../../use-cases/recovery-customer-password-use-case";


type IParams = {
  email: string;
}

 
export class RecoveryCustomerPasswordController{
  public async handler(request: Request, response: Response):
  Promise<Response>{
    const body = request.body as IParams

    const recoveryCustomerPasswordUseCase = 
      container.resolve(RecoveryCustomerPasswordUseCase)

      await recoveryCustomerPasswordUseCase.execute(body);
    return response.send();
  }
}