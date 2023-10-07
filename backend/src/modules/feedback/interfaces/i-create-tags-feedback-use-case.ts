import { Feedback } from "../infra/entities/feedback";




export namespace ICreateTagsFeedbackUseCase {

  export type Params = {
    label: string;
    description: string;
    userId: string;
  }

  export type Response = Promise<Feedback>;

  export type Implementation = {
    execute: (params: ICreateTagsFeedbackUseCase.Params)
      => ICreateTagsFeedbackUseCase.Response;
  }
}