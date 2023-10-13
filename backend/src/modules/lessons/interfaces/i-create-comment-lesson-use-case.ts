import { Message } from "../infra/entities/message";






declare namespace ICreateCommentLessonUseCase { };


namespace ICreateCommentLessonUseCase {
  export type Params = {
    authorId: string;
    content: string;
  }
}

namespace ICreateCommentLessonUseCase {
  export type Response = Promise<Message>;
}

namespace ICreateCommentLessonUseCase {
  export type Implementation = {
    execute: (params: ICreateCommentLessonUseCase.Params)
      => ICreateCommentLessonUseCase.Response
  }
}

export { ICreateCommentLessonUseCase }