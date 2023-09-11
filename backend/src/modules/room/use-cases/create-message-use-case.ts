import { inject, injectable } from "tsyringe";
import { ICreateMessageUseCase } from "../interfaces/i-create-message-use-case";
import { ICreateMessageRepository } from "../repository/i-create-message-repository";
import { randomUUID } from "crypto";
import { ICreateUUIDTokenService } from "../../customer/infra/services/contracts/i-create-uuid-token-service";
import { ICreateNewDateService } from "../../customer/infra/services/contracts/i-create-new-date-service";






@injectable()
export class CreateMessageUseCase
  implements ICreateMessageUseCase.Implementation {
  constructor(
    @inject("CreateMessageRepository")
    private createMessageRepository: ICreateMessageRepository.Implementation,
    @inject("CreateUUIDTokenService")
    private createUUIDTokenService: ICreateUUIDTokenService.Implementation,
    @inject("CreateNewDateService")
    private createNewDateService: ICreateNewDateService.Implementation,
  ) { }

  async execute(props: ICreateMessageUseCase.Params):
    Promise<ICreateMessageUseCase.Response> {

    const messageId = this.createUUIDTokenService.create()
    const MessageCreatedAt = this.createNewDateService.create();

    const createMessageRepositoryInstance = await this.createMessageRepository.create({
      ...props,
      id: messageId,
      createdAt: MessageCreatedAt,
    })

    return createMessageRepositoryInstance;
  }
}