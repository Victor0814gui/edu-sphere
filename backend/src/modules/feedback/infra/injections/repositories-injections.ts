import { container } from "tsyringe";
import { ICreateMessageFeedbackRepository } from "../../repositories/i-create-message-feedback-repository";
import { CreateMessageFeedbackRepository } from "../../repositories/implementations/create-message-feedback-repository";
import { ICreateTagsFeedbackRepository } from "../../repositories/i-create-tags-feedback-repository";
import { CreateTagsFeedbackRepository } from "../../repositories/implementations/create-tags-feedback-erpository";


container.registerSingleton<ICreateMessageFeedbackRepository.Implementation>(
  'CreateMessageFeedbackRepository',
  CreateMessageFeedbackRepository
);

container.registerSingleton<ICreateTagsFeedbackRepository.Implementation>(
  'CreateTagsFeedbackRepository',
  CreateTagsFeedbackRepository
);

container.registerSingleton<IMarkQuestionAsAnsweredRepository.Implementation>(
  'MarkQuestionAsAnsweredRepository',
  MarkQuestionAsAnsweredRepository
);