import { Request, Response } from "express";
import { container } from "tsyringe";
import { MarkQuestionAsAnsweredUseCase } from "../../../use-cases/mark-question-as-answered-use-case";

type MarkQuestionAsAnsweredControllerParams = {
  questionId: string;
}

export class MarkQuestionAsAnsweredController {
  async handler(request: Request, response: Response) {

    const customerId = request.customerId;
    const { questionId } = request.params as MarkQuestionAsAnsweredControllerParams;

    const markQuestionAsAnsweredUseCase =
      container.resolve(MarkQuestionAsAnsweredUseCase);

    const markQuestionAsAnsweredUseCaseResponse =
      await markQuestionAsAnsweredUseCase.execute({
        customerId,
        questionId,
      });

    return response.json(markQuestionAsAnsweredUseCaseResponse);
  };
};
