import { container } from "tsyringe";
import { ICreateLessonRepository } from "../../repositories/i-create-lesson-repository";
import { CreateLessonRepository } from "../../repositories/implementation/create-lesson-repository";
import { ICreateCommentLessonRepository } from "../../repositories/i-create-comment-lesson-repository";
import { CreateCommentLessonRepository } from "../../repositories/implementation/create-comment-lesson-repository";

container.registerSingleton<ICreateLessonRepository.Implementation>(
  'CreateLessonRepository',
  CreateLessonRepository
);

container.registerSingleton<ICreateCommentLessonRepository.Implementation>(
  "CreateCommentLessonRepository",
  CreateCommentLessonRepository
)