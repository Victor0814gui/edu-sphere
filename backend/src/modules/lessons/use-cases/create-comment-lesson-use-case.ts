import { randomUUID } from "crypto";
import { inject, injectable } from "tsyringe";
import { ICreateCommentLessonUseCase } from "../interfaces/i-create-comment-lesson-use-case";
import { ICreateCommentLessonRepository } from "../repositories/i-create-comment-lesson-repository";






@injectable()
export class CreateCommentLessonUseCase
  implements ICreateCommentLessonUseCase.Implementation {

  constructor(
    @inject("CreateCommentLessonRepository")
    private createCommentLessonRepository:
      ICreateCommentLessonRepository.Implementation,
  ) { }

  async execute(params: ICreateCommentLessonUseCase.Params):
    ICreateCommentLessonUseCase.Response {

    const createCommentLessonRepositoryResponse =
      await this.createCommentLessonRepository.create({
        ...params,
        id: randomUUID(),
        createdAt: new Date(),
      });

    return createCommentLessonRepositoryResponse;
  }
}