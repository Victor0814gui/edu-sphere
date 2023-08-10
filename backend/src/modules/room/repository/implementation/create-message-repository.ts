import { PrismaClient } from "@prisma/client";
import { ICreateMessageRepository } from "../i-create-message-repository";



const database = new PrismaClient();

export class CreateMessageRepository
  implements ICreateMessageRepository.Implementation{

  async create(props: ICreateMessageRepository.Create.Params): 
    Promise<ICreateMessageRepository.Create.Response>{

    const CreateMessageRepositoryResponse = database.message.create({
      data:{
        ...props
      }
    })
    
    return CreateMessageRepositoryResponse
  };
}