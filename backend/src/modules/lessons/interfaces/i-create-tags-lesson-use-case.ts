import { Tag } from "../infra/entities/tag";


declare namespace ICreateTagsLessonUseCase { }


declare namespace ICreateTagsLessonUseCase {
  export type Params = {
    label: string;
    description: string;
    userId: string;
  };
}

declare namespace ICreateTagsLessonUseCase {
  export type Response = Promise<Tag>;
}


declare namespace ICreateTagsLessonUseCase {
  export type Implementation = {
    execute: (params: ICreateTagsLessonUseCase.Params)
      => ICreateTagsLessonUseCase.Response
  }
}

export { ICreateTagsLessonUseCase }