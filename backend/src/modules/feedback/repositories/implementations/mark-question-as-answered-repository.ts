import { PrismaClient } from "@prisma/client";
import { IMarkQuestionAsAnsweredRepository } from "../i-mark-question-as-answered-repository";


const database = new PrismaClient();

export class MarkQuestionAsAnsweredRepository
  implements IMarkQuestionAsAnsweredRepository.Implementation {
  async mark(params: IMarkQuestionAsAnsweredRepository.Mark.Params):
    IMarkQuestionAsAnsweredRepository.Mark.Response {

    const createTagFeedback = await database.feedback.update({
      where: {
        id: params.questionId,
        answered: params.answered
      },
      data: {
        answered: true,
      }
    })

    return createTagFeedback;
  }

  async findById(params: IMarkQuestionAsAnsweredRepository.FindById.Params):
    IMarkQuestionAsAnsweredRepository.FindById.Response {
    const response = {} as IMarkQuestionAsAnsweredRepository.FindById.Response;

    return response;
  }
}