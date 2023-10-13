import { randomUUID } from "crypto";
import { ICreateMessageFeedbackUseCase } from "../interfaces/i-create-message-feedback-use-case";
import { ICreateMessageFeedbackRepository } from "../repositories/i-create-message-feedback-repository";
import { inject, injectable } from "tsyringe";




@injectable()
export class CreateMessageFeedbackUseCase
  implements ICreateMessageFeedbackUseCase.Implementation {
  constructor(
    @inject("CreateMessageFeedbackRepository")
    private createMessageFeedbackRepository: ICreateMessageFeedbackRepository.Implementation
  ) { }
  async execute(params: ICreateMessageFeedbackUseCase.Params):
    ICreateMessageFeedbackUseCase.Response {

    const createMessageFeedbackRepositoryResponse =
      await this.createMessageFeedbackRepository.create({
        createdAt: new Date(),
        id: randomUUID(),
        description: params.description,
        label: params.label,
        userId: params.userId,
        answered: false,
      });

    return createMessageFeedbackRepositoryResponse;
  }
}