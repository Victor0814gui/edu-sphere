import { Lesson } from "@/src/shared/application/entities/lesson"




export namespace ICreateLessonRepository {
  export namespace FindByTitle {
    export type Params = {
      slug: string;
    }

    export type Response = Promise<Lesson | null>
  }

  export namespace Create {
    export type Params = Lesson & {
      // title: string;
      // description: string;
      // roomId: string;
      // start: Date;
      // end: Date;
      // duration: number;
      // type: string;
      // createdAt: string;
      // id: string;
    }

    export type Response = Promise<Lesson>
  }

  export type Implementation = {
    create: (props: ICreateLessonRepository.Create.Params)
      => ICreateLessonRepository.Create.Response;
    findByTitle: (props: ICreateLessonRepository.FindByTitle.Params)
      => ICreateLessonRepository.FindByTitle.Response;
  }
}