import { container } from "tsyringe";
import { Request, Response } from "express";
import { CreateMessageFeedbackUseCase } from "../../../use-cases/create-message-feedback-use-case";


type CreateMessageFeedbackControllerParams = {
  description: string;
  label: string;
}

export class CreateMessageFeedbackController {
  async handler(request: Request, response: Response): Promise<Response> {
    const body = request.body as CreateMessageFeedbackControllerParams;
    const createMessageFeedbackControllerService = container.resolve(CreateMessageFeedbackUseCase);

    const customerId = request.customerId;


    const createMessageFeedbackControllerServiceResponse =
      await createMessageFeedbackControllerService.execute({
        ...body,
        userId: customerId,
      })

    return response.json(createMessageFeedbackControllerServiceResponse);
  }
};