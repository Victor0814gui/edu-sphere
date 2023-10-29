import { Message } from "@/src/shared/application/entities/message";





export namespace ICreateMessageRepository {
  export namespace Create {
    export interface Params extends Message { }

    export interface Response extends Message { }
  }

  export interface Implementation {
    create: (props: ICreateMessageRepository.Create.Params) =>
      Promise<ICreateMessageRepository.Create.Response>
  }
}