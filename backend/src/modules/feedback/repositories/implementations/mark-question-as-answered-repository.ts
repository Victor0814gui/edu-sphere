import { PrismaClient } from "@prisma/client";
import { IMarkQuestionAsAnsweredRepository } from "../i-mark-question-as-answered-repository";


const database = new PrismaClient();

export class MarkQuestionAsAnsweredRepository
  implements IMarkQuestionAsAnsweredRepository.Implementation {
  async mark(params: IMarkQuestionAsAnsweredRepository.Mark.Params):
    IMarkQuestionAsAnsweredRepository.Mark.Response {

    const createTagFeedback = await database.feedback.create({
      data: params
    })

    return createTagFeedback;
  }

  async findById(params: IMarkQuestionAsAnsweredRepository.FindById.Params):
    IMarkQuestionAsAnsweredRepository.FindById.Response {
    const response = {} as IMarkQuestionAsAnsweredRepository.FindById.Response;

    return response;
  }
}