import { container } from "tsyringe";
import {Request, Response} from "express";
import { CreatePaymentIntentUseCase } from "@purchases/use-cases/create-payment-intent-use-case";

type Params = {
  amount: number;
}

export class CreatePaymentIntentController{
  public async handler(request:Request,response: Response): Promise<Response>{
    const createPaymentIntentUseCase = container.resolve(CreatePaymentIntentUseCase);
    const params = request.body as Params

    const createPaymentIntentUseCaseResponse = 
    await createPaymentIntentUseCase.execute(params);

    return response.json(createPaymentIntentUseCaseResponse);
  }
}
