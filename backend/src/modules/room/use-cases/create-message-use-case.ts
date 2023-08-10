import { inject, injectable } from "tsyringe";
import { ICreateMessageUseCase } from "../interfaces/i-create-message-use-case";
import { ICreateMessageRepository } from "../repository/i-create-message-repository";
import { randomUUID } from "crypto";






@injectable()
export class CreateMessageUseCase 
  implements ICreateMessageUseCase.Implementation {
  constructor(
    @inject("CreateMessageRepository")
    private createMessageRepository: ICreateMessageRepository.Implementation
  ){}
  
  async execute(props: ICreateMessageUseCase.Params): 
    Promise<ICreateMessageUseCase.Response>{
    
    const createMessageRepositoryInstance = await this.createMessageRepository.create({
      ...props,
      id: randomUUID(),
      createdAt: new Date(),
    })

    return createMessageRepositoryInstance;
  }
}