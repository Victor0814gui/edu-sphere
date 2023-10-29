import { PrismaClient } from "@prisma/client";
import { ICreateTagsLessonRepository } from "../i-create-tags-lesson-repository";

const database = new PrismaClient();

export class CreateTagsLessonRepository
  implements ICreateTagsLessonRepository.Implementation {
  public async findByName(params: ICreateTagsLessonRepository.FindByName.Params):
    ICreateTagsLessonRepository.FindByName.Response {
    const label = params;

    const findByNameTagResponse = await database.tag.findFirst({
      where: { label },
    });

    return findByNameTagResponse
  }

  public async create(params: ICreateTagsLessonRepository.Create.Params):
    ICreateTagsLessonRepository.Create.Response {

    const createTagResponse = await database.tag.create({
      data: params,
    });

    return createTagResponse
  }
}