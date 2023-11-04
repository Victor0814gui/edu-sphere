import { container, injectable } from "tsyringe";
import { CreateMessageUseCase } from "../../use-cases/create-message-use-case";


interface ICreateMessageController{
  content: string;
  authorId: string
  roomId: string;
  createdAt: Date;
}


@injectable()
export class CreateMessageController {
  async handler(params: ICreateMessageController){
    
    const createMessageUseCase = container.resolve(CreateMessageUseCase);

    createMessageUseCase.execute(params);
  }
}