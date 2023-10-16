import { Schedule } from "../infra/entities/schedule"



declare namespace ICreateScheduleLessonRepository { }


namespace ICreateScheduleLessonRepository {
  export namespace FindByDate {
    export type Params = {

    }
    export type Response = Promise<Schedule>;
  }
}


namespace ICreateScheduleLessonRepository {
  export namespace Create {
    export type Params = Schedule & {
      lessonId: string;
    };

    export type Response = Promise<Schedule>
  }
}


namespace ICreateScheduleLessonRepository {
  export type Implementation = {
    create: (params: ICreateScheduleLessonRepository.Create.Params)
      => ICreateScheduleLessonRepository.Create.Response;
    findByDate: (params: ICreateScheduleLessonRepository.FindByDate.Params)
      => ICreateScheduleLessonRepository.FindByDate.Response
  }
}

export { ICreateScheduleLessonRepository };