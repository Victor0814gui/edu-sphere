import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateLessonUseCase } from "../../../use-cases/create-lesson-use-case";




type CreateLessonControllerParams = {
  title: string;
  description: string;
  roomId: string;
  end: Date;
  duration: number;
  type: string;
}

export class CreateLessonController {

  async handler(request: Request, response: Response) {
    const createLessonUseCaseInstance = container.resolve(CreateLessonUseCase);
    const body = request.body as CreateLessonControllerParams;

    const createLessonUseCaseInstanceResponse = await createLessonUseCaseInstance.execute(body);

    return createLessonUseCaseInstanceResponse;
  }
}