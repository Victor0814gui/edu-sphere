import { PrismaClient } from "@prisma/client";
import { ICreateMessageFeedbackRepository } from "../i-create-message-feedback-repository";

const database = new PrismaClient();



export class CreateMessageFeedbackRepository
  implements ICreateMessageFeedbackRepository.Implementation {
  async create(params: ICreateMessageFeedbackRepository.Create.Params):
    ICreateMessageFeedbackRepository.Create.Response {

    const createMessageFeedback = await database.feedback.create({
      data: params
    })

    return createMessageFeedback;
  }
}