import { container } from "tsyringe";
import { Request, Response } from "express";
import { CreateCommentLessonUseCase } from "../../../use-cases/create-comment-lesson-use-case";



type CreateCommentLessonControllerParams = {
  authorId: string;
  content: string;
}

export class CreateCommentLessonController {
  async handler(request: Request, response: Response): Promise<Response> {
    const body = request.body as CreateCommentLessonControllerParams;
    const createCommentLessonUseCase = container.resolve(CreateCommentLessonUseCase);

    const createCommentLessonUseCaseResponse =
      await createCommentLessonUseCase.execute(body);

    return response.json(createCommentLessonUseCaseResponse);
  }
}