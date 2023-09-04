import { inject, injectable } from "tsyringe";
import { ICreateLessonUseCase } from "../interfaces/i-create-lesson-use-case";
import { ICreateLessonRepository } from "../repositories/i-create-lesson-repository";
import { LessonBusinessException } from "../infra/exceptions/business-exception";
import crypto from "crypto";



@injectable()
export class CreateLessonUseCase
  implements ICreateLessonUseCase.Implementation {
  constructor(
    @inject("CreateLessonRepository")
    private createLessonRepository: ICreateLessonRepository.Implementation
  ) { }

  async execute(props: ICreateLessonUseCase.Params):
    ICreateLessonUseCase.Response {

    const tranformTitleInSlug = props.title
      .trim()
      .toLowerCase()
      .replace(/[^a-zA-Z0-9\s]/g, "")
      .replace(/\s+/g, "-");

    const verifyLessonAlreayExists = await this.createLessonRepository.findByTitle({
      slug: tranformTitleInSlug,
    })

    if (!!verifyLessonAlreayExists?.id) {
      throw new LessonBusinessException("Lesson already exists", 403);
    }

    const startDate = new Date(); // Data de início
    const endDate = new Date(props.end);   // Data de término
    const durationInMilliseconds = startDate.getMilliseconds() - endDate.getMilliseconds();
    const duration = durationInMilliseconds / 60000;

    const createLessonRepositoryResponse = await this.createLessonRepository.create({
      ...props,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      start: startDate,
      end: endDate,
      slug: tranformTitleInSlug,
      duration: duration,
    })

    return createLessonRepositoryResponse;
  }
}