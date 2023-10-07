import { Feedback } from "../infra/entities/feedback";





declare namespace ICreateMessageFeedbackRepository { }


declare namespace ICreateMessageFeedbackRepository {

  export namespace Create {
    export type Params = Feedback;
    export type Response = Promise<Feedback>;
  }
}



namespace ICreateMessageFeedbackRepository {
  export type Implementation = {
    create: (params: ICreateMessageFeedbackRepository.Create.Params)
      => ICreateMessageFeedbackRepository.Create.Response;
  }
}

export { ICreateMessageFeedbackRepository }