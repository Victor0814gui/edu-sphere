import { Tag } from "../infra/entities/tag";



type CreateContent = {
  userId: string;
}

declare namespace ICreateTagsFeedbackRepository { }

namespace ICreateTagsFeedbackRepository {
  export namespace Create {
    export type Params = CreateContent & Tag;
    export type Response = Promise<Tag>;
  }
}

namespace ICreateTagsFeedbackRepository {
  export namespace FindByName {
    export type Params = {
      label: string;
      description: string;
    }
    export type Response = Promise<Tag | null>;
  }
}

namespace ICreateTagsFeedbackRepository {
  export type Implementation = {
    create: (params: ICreateTagsFeedbackRepository.Create.Params)
      => ICreateTagsFeedbackRepository.Create.Response;
    findByName: (params: ICreateTagsFeedbackRepository.FindByName.Params)
      => ICreateTagsFeedbackRepository.FindByName.Response;
  }
}

export { ICreateTagsFeedbackRepository };