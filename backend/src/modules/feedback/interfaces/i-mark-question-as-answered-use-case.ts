import { Feedback } from "../infra/entities/feedback";




declare namespace IMarkQuestionAsAnsweredUseCase { };



namespace IMarkQuestionAsAnsweredUseCase {
  export type Params = {
    customerId: string;
    questionId: string;
  }
};

namespace IMarkQuestionAsAnsweredUseCase {
  export type Response = Promise<Feedback>;
};

namespace IMarkQuestionAsAnsweredUseCase {
  export type Implementation = {
    execute: (params: IMarkQuestionAsAnsweredUseCase.Params)
      => IMarkQuestionAsAnsweredUseCase.Response;
  }
};

export { IMarkQuestionAsAnsweredUseCase };