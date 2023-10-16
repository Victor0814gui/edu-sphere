import { PrismaClient } from "@prisma/client";
import { ICreateScheduleLessonRepository } from "../i-create-schedule-lesson-repository";
import { Schedule } from "../../infra/entities/schedule";



const database = new PrismaClient();


export class CreateScheduleLessonRepository
  implements ICreateScheduleLessonRepository.Implementation {
  public async create(params: ICreateScheduleLessonRepository.Create.Params):
    ICreateScheduleLessonRepository.Create.Response {

    const createScheduleResponse = await database.schedule.create({
      data: {
        ...params,
        lessons: {
          connect: [{
            id: params.lessonId,
          }]
        }
      }
    }) as Schedule;

    return createScheduleResponse;
  };

  public async findByDate(params: ICreateScheduleLessonRepository.FindByDate.Params):
    ICreateScheduleLessonRepository.FindByDate.Response {

    const response = {} as ICreateScheduleLessonRepository.FindByDate.Response;

    return response;
  };
}


export { ICreateScheduleLessonRepository };