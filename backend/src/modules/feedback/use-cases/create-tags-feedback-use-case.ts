import { randomUUID } from "crypto";
import { ICreateTagsFeedbackUseCase } from "../interfaces/i-create-tags-feedback-use-case";
import { ICreateTagsFeedbackRepository } from "../repositories/i-create-tags-feedback-repository";





export class CreateTagsFeedbackUseCase
  implements ICreateTagsFeedbackUseCase.Implementation {
  constructor(
    private createMessageFeedbackRepository: ICreateTagsFeedbackRepository.Implementation
  ) { }
  async execute(params: ICreateTagsFeedbackUseCase.Params):
    ICreateTagsFeedbackUseCase.Response {


    const verifyTagsAlreadyExists = [];

    const createMessageFeedbackRepositoryResponse =
      await this.createMessageFeedbackRepository.create({
        createdAt: new Date(),
        id: randomUUID(),
        description: params.description,
        label: params.label,
        userId: params.userId,
      });

    return createMessageFeedbackRepositoryResponse;
  }
}