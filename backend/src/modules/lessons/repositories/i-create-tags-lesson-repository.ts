import { Tag } from "../infra/entities/tag";


declare namespace ICreateTagsLessonRepository { }


namespace ICreateTagsLessonRepository {
  export namespace Create {
    export type Params = {
      id: string;
      label: string;
      description: string;
      createdAt: Date;
      userId: string;
    };
    export type Response = Promise<Tag>;
  }
}

namespace ICreateTagsLessonRepository {
  export namespace FindByName {
    export type Params = string;
    export type Response = Promise<Tag | null>;
  }
}


namespace ICreateTagsLessonRepository {
  export type Implementation = {
    findByName: (params: ICreateTagsLessonRepository.FindByName.Params)
      => ICreateTagsLessonRepository.FindByName.Response;
    create: (params: ICreateTagsLessonRepository.Create.Params)
      => ICreateTagsLessonRepository.Create.Response
  }
}

export { ICreateTagsLessonRepository }