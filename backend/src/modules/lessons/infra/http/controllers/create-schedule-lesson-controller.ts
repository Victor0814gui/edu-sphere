import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateScheduleLessonUseCase } from "../../../use-cases/create-schedule-lesson-use-case";


type CreateScheduleLessonControllerParams = {
  start: Date;
  end: Date;
  description: string;
  title: string;
  lessonId: string;
}

export class CreateScheduleLessonController {
  public async handler(request: Request, response: Response):
    Promise<Response> {

    const params = request.body as CreateScheduleLessonControllerParams;

    const createScheduleLessonUseCase =
      container.resolve(CreateScheduleLessonUseCase);

    const createScheduleLessonUseCaseResponse =
      await createScheduleLessonUseCase.execute(params);

    return response.json(createScheduleLessonUseCaseResponse);
  }
}