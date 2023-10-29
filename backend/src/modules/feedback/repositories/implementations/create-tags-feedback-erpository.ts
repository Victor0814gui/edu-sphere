import { PrismaClient } from "@prisma/client";
import { ICreateTagsFeedbackRepository } from "../i-create-tags-feedback-repository";


const database = new PrismaClient();

export class CreateTagsFeedbackRepository
  implements ICreateTagsFeedbackRepository.Implementation {
  async create(params: ICreateTagsFeedbackRepository.Create.Params):
    ICreateTagsFeedbackRepository.Create.Response {
    const createTagFeedback = await database.tag.create({
      data: params
    })

    return createTagFeedback;
  }

  async findByName(params: ICreateTagsFeedbackRepository.FindByName.Params):
    ICreateTagsFeedbackRepository.FindByName.Response {

    const createTagFeedback = await database.tag.findFirst({
      where: {
        id: params,
      }
    })

    return createTagFeedback;
  }
}