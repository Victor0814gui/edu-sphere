import { Message } from "@/src/aplication/entities/message";







export namespace ICreateMessageUseCase {
  export interface Params {
    content: string;
    authorId: string;
    roomId : string;
  }

  export interface Response extends Message{ }

  export interface Implementation{
    execute: (props: ICreateMessageUseCase.Params) => Promise<ICreateMessageUseCase.Response>;
  }
}