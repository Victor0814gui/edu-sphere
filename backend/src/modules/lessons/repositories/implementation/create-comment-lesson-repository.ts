import { ICreateCommentLessonRepository } from "../i-create-comment-lesson-repository";



export class CreateCommentLessonRepository
  implements ICreateCommentLessonRepository.Implementation {
  async create(props: ICreateCommentLessonRepository.Create.Params):
    ICreateCommentLessonRepository.Create.Response {

    const response = {} as ICreateCommentLessonRepository.Create.Response;

    return response;
  }
}