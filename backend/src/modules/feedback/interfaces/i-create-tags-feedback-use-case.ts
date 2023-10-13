import { Feedback } from "../infra/entities/feedback";
import { Tag } from "../infra/entities/tag";




export namespace ICreateTagsFeedbackUseCase {

  export type Params = {
    label: string;
    description: string;
    userId: string;
  }

  export type Response = Promise<Tag>;

  export type Implementation = {
    execute: (params: ICreateTagsFeedbackUseCase.Params)
      => ICreateTagsFeedbackUseCase.Response;
  }
}