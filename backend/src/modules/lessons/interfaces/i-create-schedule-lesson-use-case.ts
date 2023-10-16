import { Schedule } from "../infra/entities/schedule";

declare interface ICreateScheduleLessonUseCase { }


namespace ICreateScheduleLessonUseCase {
  export type Params = {
    lessonId: string;
    start: Date;
    end: Date;
    description: string;
    title: string;
  }
}

namespace ICreateScheduleLessonUseCase {
  export type Response = Promise<Schedule>;
}

namespace ICreateScheduleLessonUseCase {
  export type Implementation = {
    execute: (params: ICreateScheduleLessonUseCase.Params)
      => ICreateScheduleLessonUseCase.Response;
  }
}

export { ICreateScheduleLessonUseCase };