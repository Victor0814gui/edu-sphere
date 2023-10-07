import { Feedback } from "../infra/entities/feedback";





export namespace ICreateMessageFeedbackUseCase {

  export type Params = {
    description: string;
    label: string;
    userId: string;
  }

  export type Response = Promise<Feedback>;

  export type Implementation = {
    execute: (params: ICreateMessageFeedbackUseCase.Params)
      => ICreateMessageFeedbackUseCase.Response;
  }
}