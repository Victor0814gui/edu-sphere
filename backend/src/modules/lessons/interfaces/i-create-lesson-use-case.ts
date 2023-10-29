import { Lesson } from "@/src/shared/application/entities/lesson";
import { inject, injectable } from "tsyringe";










export namespace ICreateLessonUseCase {
  export type Params = {
    title: string,
    description: string,
    roomId: string,
    end: Date,
    duration: number,
    type: string,
  }
  export type Response = Promise<Lesson>;

  export type Implementation = {
    execute: (props: ICreateLessonUseCase.Params) => ICreateLessonUseCase.Response;
  }
}