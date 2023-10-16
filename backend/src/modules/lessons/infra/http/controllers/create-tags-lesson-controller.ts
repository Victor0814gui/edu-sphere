import { container } from "tsyringe";
import { Request, Response } from "express";
import { CreateTagsLessonUseCase } from "../../../use-cases/create-tags-lesson-use-case";

type CreateTagsLessonControllerParams = {
  label: string;
  description: string;
}

export class CreateTagsLessonController {
  public async handler(request: Request, response: Response):
    Promise<Response> {
    const params = request.body as CreateTagsLessonControllerParams;
    const customerId = request.customerId;

    const createTagsLessonUseCase =
      container.resolve(CreateTagsLessonUseCase)

    const createTagsLessonUseCaseResponse =
      await createTagsLessonUseCase.execute({
        ...params,
        userId: customerId,
      });

    return response.json(createTagsLessonUseCaseResponse);
  }
}