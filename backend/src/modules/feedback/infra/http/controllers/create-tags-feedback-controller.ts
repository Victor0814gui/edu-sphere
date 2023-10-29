import { container } from "tsyringe";
import { Request, Response } from "express";
import { CreateTagsFeedbackUseCase } from "@feedback/use-cases/create-tags-feedback-use-case";


type CreateTagsFeedbackControllerParams = {
  label: string;
  description: string;
}

export class CreateTagsFeedbackController {
  async handler(request: Request, response: Response): Promise<Response> {
    const body = request.body as CreateTagsFeedbackControllerParams;
    const customerId = request.customerId;

    const createTagsFeedbackControllerService =
      container.resolve(CreateTagsFeedbackUseCase);


    const createTagsFeedbackControllerServiceResponse =
      await createTagsFeedbackControllerService.execute({
        ...body,
        userId: customerId,
      })

    return response.json(createTagsFeedbackControllerServiceResponse);
  }
};