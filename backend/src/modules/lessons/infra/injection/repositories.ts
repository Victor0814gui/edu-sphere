import { container } from "tsyringe";
import { ICreateLessonRepository } from "../../repositories/i-create-lesson-repository";
import { CreateLessonRepository } from "../../repositories/implementation/create-lesson-repository";
import { ICreateCommentLessonRepository } from "../../repositories/i-create-comment-lesson-repository";
import { CreateCommentLessonRepository } from "../../repositories/implementation/create-comment-lesson-repository";
import { CreateScheduleLessonRepository, ICreateScheduleLessonRepository } from "../../repositories/implementation/create-schedule-lesson-repository";
import { ICreateTagsLessonRepository } from "../../repositories/i-create-tags-lesson-repository";
import { CreateTagsLessonRepository } from "../../repositories/implementation/create-tags-lesson-repository";

container.registerSingleton<ICreateLessonRepository.Implementation>(
  'CreateLessonRepository',
  CreateLessonRepository
);

container.registerSingleton<ICreateCommentLessonRepository.Implementation>(
  "CreateCommentLessonRepository",
  CreateCommentLessonRepository
);

container.registerSingleton<ICreateScheduleLessonRepository.Implementation>(
  "CreateScheduleLessonRepository",
  CreateScheduleLessonRepository
);

container.registerSingleton<ICreateTagsLessonRepository.Implementation>(
  "CreateTagsLessonRepository",
  CreateTagsLessonRepository,
)