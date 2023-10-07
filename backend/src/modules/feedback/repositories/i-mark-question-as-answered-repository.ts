import { Feedback } from "../infra/entities/feedback";





declare namespace IMarkQuestionAsAnsweredRepository { }


namespace IMarkQuestionAsAnsweredRepository {
  export namespace Mark {
    export type Params = string;
    export type Response = Promise<Feedback>;
  }
}

namespace IMarkQuestionAsAnsweredRepository {
  export namespace FindById {
    export type Params = string;
    export type Response = Promise<Feedback>;
  }
}



namespace IMarkQuestionAsAnsweredRepository {
  export type Implementation = {
    mark: (params: IMarkQuestionAsAnsweredRepository.Mark.Params)
      => IMarkQuestionAsAnsweredRepository.Mark.Response;
    findById: (params: IMarkQuestionAsAnsweredRepository.FindById.Params)
      => IMarkQuestionAsAnsweredRepository.FindById.Response;
  }
}

export { IMarkQuestionAsAnsweredRepository }