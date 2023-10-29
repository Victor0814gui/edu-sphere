import { inject, injectable } from "tsyringe";
import { FeedbackBusinessException } from "../infra/exceptions/business-exception";
import { IMarkQuestionAsAnsweredUseCase } from "../interfaces/i-mark-question-as-answered-use-case";
import { IMarkQuestionAsAnsweredRepository } from "../repositories/i-mark-question-as-answered-repository";



@injectable()
export class MarkQuestionAsAnsweredUseCase
  implements IMarkQuestionAsAnsweredUseCase.Implementation {
  constructor(
    @inject("MarkQuestionAsAnsweredRepository")
    private markQuestionAsAnsweredRepository: IMarkQuestionAsAnsweredRepository.Implementation
  ) { }
  async execute(params: IMarkQuestionAsAnsweredUseCase.Params):
    IMarkQuestionAsAnsweredUseCase.Response {

    const verifyFeedbackAlreadyExists =
      await this.markQuestionAsAnsweredRepository.findById(params.questionId);

    if (!verifyFeedbackAlreadyExists.id) {
      throw new FeedbackBusinessException("Question does not exists", 404)
    }

    const createQuestionResponse =
      await this.markQuestionAsAnsweredRepository.mark({
        questionId: params.questionId,
        answered: true,
      });

    return createQuestionResponse;
  };
};
