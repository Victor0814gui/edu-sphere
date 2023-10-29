import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateLessonUseCase } from "../../../use-cases/create-lesson-use-case";




type ICreateLessonControllerParams = {
  title: string;
  description: string;
  roomId: string;
  end: Date;
  duration: number;
  type: string;
}

export class CreateLessonController {

  async handler(request: Request, response: Response) {
    const body = request.body as ICreateLessonControllerParams;

    const createLessonUseCaseInstance = container.resolve(CreateLessonUseCase);

    const createLessonUseCaseInstanceResponse =
      await createLessonUseCaseInstance.execute(body);

    return response.json(createLessonUseCaseInstanceResponse);
  }
}