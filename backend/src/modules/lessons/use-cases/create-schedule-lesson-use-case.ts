import { randomUUID } from "crypto";
import { inject, injectable } from "tsyringe";
import { ICreateScheduleLessonUseCase } from "../interfaces/i-create-schedule-lesson-use-case";
import { ICreateScheduleLessonRepository } from "../repositories/i-create-schedule-lesson-repository";
import { } from "dayjs"
import { isAfter, parseISO } from "date-fns";
import { LessonBusinessException } from "../infra/exceptions/business-exception";


@injectable()
export class CreateScheduleLessonUseCase
  implements ICreateScheduleLessonUseCase.Implementation {
  constructor(
    @inject("CreateScheduleLessonRepository")
    private createScheduleLessonRepository: ICreateScheduleLessonRepository.Implementation
  ) { }
  async execute(params: ICreateScheduleLessonUseCase.Params):
    ICreateScheduleLessonUseCase.Response {

    const currentDate = new Date();
    const appointmentDate = new Date(params.end);

    if (!isAfter(appointmentDate, currentDate)) {
      throw new LessonBusinessException("This date is no longer available", 403);
    }


    const createScheduleLessonRepositoryResponse =
      await this.createScheduleLessonRepository.create({
        ...params,
        status: "confirmed",
        id: randomUUID(),
        start: new Date(),
        createdAt: new Date(),
      })

    return createScheduleLessonRepositoryResponse;
  }
}