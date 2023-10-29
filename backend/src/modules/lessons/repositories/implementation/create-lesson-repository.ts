import { Lesson } from "@/src/shared/application/entities/lesson";
import { ICreateLessonRepository } from "../i-create-lesson-repository";
import { PrismaClient } from "@prisma/client";



const database = new PrismaClient();

export class CreateLessonRepository
  implements ICreateLessonRepository.Implementation {

  async create(props: ICreateLessonRepository.Create.Params):
    ICreateLessonRepository.Create.Response {
    const createLessonResponse = await database.lesson.create({
      data: {
        ...props,
        type: props.type,
      }
    });

    return createLessonResponse;
  }

  async findByTitle(props: ICreateLessonRepository.FindByTitle.Params):
    ICreateLessonRepository.FindByTitle.Response {

    const findByTitleLessonResponse = await database.lesson.findFirst({
      where: {
        slug: props.slug,
      }
    });

    return findByTitleLessonResponse;
  }
}