import { Router } from "express";
import { container } from "tsyringe";
import { CreateTagsFeedbackController } from "../controllers/create-tags-feedback-controller";
import { CreateMessageFeedbackController } from "../controllers/create-message-feedback-controller";
import { customerAuthenticationCheck } from "../middlewares/customer-authentication-check";
import { uploadFileMiddleware } from "../middlewares/upload-files-middleware";
import { MarkQuestionAsAnsweredController } from "../controllers/mark-question-as-answered-controller";
const feedbackRoutes = Router();


const createMessageFeedbackControllerInstance =
  container.resolve(CreateMessageFeedbackController);
const markQuestionAsAnsweredControllerInstance =
  container.resolve(MarkQuestionAsAnsweredController);
const createTagsFeedbackControllerInstance =
  container.resolve(CreateTagsFeedbackController);



feedbackRoutes.post(
  "/feedback",
  uploadFileMiddleware,
  customerAuthenticationCheck,
  createMessageFeedbackControllerInstance.handler,
);

feedbackRoutes.post(
  "/feedback/tags",
  customerAuthenticationCheck,
  createTagsFeedbackControllerInstance.handler,
);

feedbackRoutes.post(
  "/feedback/answers",
  customerAuthenticationCheck,
  markQuestionAsAnsweredControllerInstance.handler,
);

export { feedbackRoutes };