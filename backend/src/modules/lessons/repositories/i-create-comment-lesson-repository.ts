import { Message } from "../infra/entities/message";


declare namespace ICreateCommentLessonRepository { }

namespace ICreateCommentLessonRepository {
  export namespace Create {
    export type Params = {
      id: string;
      createdAt: Date;
      content: string;
      authorId: string;
    }

    export type Response = Promise<Message>
  }
}

namespace ICreateCommentLessonRepository {
  export type Implementation = {
    create: (props: ICreateCommentLessonRepository.Create.Params)
      => ICreateCommentLessonRepository.Create.Response;
  }
}

export { ICreateCommentLessonRepository };