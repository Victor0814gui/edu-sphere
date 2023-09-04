import { container } from "tsyringe";
import { ICreateLessonRepository } from "../../repositories/i-create-lesson-repository";
import { CreateLessonRepository } from "../../repositories/implementation/create-lesson-repository";


container.registerSingleton<ICreateLessonRepository.Implementation>(
  'CreateLessonRepository',
  CreateLessonRepository
);