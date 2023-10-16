import { Lesson } from "@/src/shared/application/entities/lesson"

declare namespace ICreateLessonRepository { }



namespace ICreateLessonRepository {
  export namespace FindByTitle {
    export type Params = {
      slug: string;
    }

    export type Response = Promise<Lesson | null>;
  }
}

namespace ICreateLessonRepository {
  export namespace Create {
    export type Params = Lesson;

    export type Response = Promise<Lesson>;
  }
}

namespace ICreateLessonRepository {
  export type Implementation = {
    create: (props: ICreateLessonRepository.Create.Params)
      => ICreateLessonRepository.Create.Response;
    findByTitle: (props: ICreateLessonRepository.FindByTitle.Params)
      => ICreateLessonRepository.FindByTitle.Response;
  }
}

export { ICreateLessonRepository };