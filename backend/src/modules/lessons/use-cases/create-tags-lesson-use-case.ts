import { inject, injectable } from "tsyringe";
import { LessonBusinessException } from "../infra/exceptions/business-exception";
import { ICreateTagsLessonUseCase } from "../interfaces/i-create-tags-lesson-use-case";
import { ICreateTagsLessonRepository } from "../repositories/i-create-tags-lesson-repository";
import { randomUUID } from "crypto";


@injectable()
export class CreateTagsLessonUseCase
  implements ICreateTagsLessonUseCase.Implementation {
  constructor(
    @inject("CreateTagsLessonRepository")
    private createTagsLessonRepository: ICreateTagsLessonRepository.Implementation
  ) { }

  public async execute(params: ICreateTagsLessonUseCase.Params):
    ICreateTagsLessonUseCase.Response {

    const verifyTagsAlreadyExists =
      await this.createTagsLessonRepository.findByName(params.label);

    if (verifyTagsAlreadyExists?.id) {
      throw new LessonBusinessException("tag already exists", 403);
    }

    const createTagsLessonRepositoryResponse =
      await this.createTagsLessonRepository.create({
        ...params,
        createdAt: new Date(),
        id: randomUUID(),
      });

    return createTagsLessonRepositoryResponse;
  }

}