import { Router } from "express"
import { container } from "tsyringe";
import { CreateLessonController } from "../controllers/create-lesson-controller";
import { upload } from "../gateways/upload-files";
import { CreateCommentLessonController } from "../controllers/create-comment-lesson-controller";
import { CreateScheduleLessonController } from "../controllers/create-schedule-lesson-controller";
import { CreateTagsLessonController } from "../controllers/create-tags-lesson-controller";
import { customerAuthenticationCheck } from "../middlewares/customer-authentication-check";
import { LessonBusinessException } from "../../exceptions/business-exception";
import { lessonBusinessMiddleware } from "../middlewares/business-middleware";

const lessonsRoutes = Router();
const createLessonController = container.resolve(CreateLessonController)
const createCommentLessonController = container.resolve(CreateCommentLessonController)
const createScheduleLessonController = container.resolve(CreateScheduleLessonController);
const createTagsLessonController = container.resolve(CreateTagsLessonController);

lessonsRoutes.post(
  "/lessons",
  customerAuthenticationCheck,
  upload.array('files', 12),
  createLessonController.handler,
);

lessonsRoutes.post(
  "/lessons/message",
  customerAuthenticationCheck,
  createCommentLessonController.handler,
);

lessonsRoutes.post(
  "/schedule",
  customerAuthenticationCheck,
  createScheduleLessonController.handler,
);

lessonsRoutes.post(
  "/hashtags",
  customerAuthenticationCheck,
  createTagsLessonController.handler,
);

lessonsRoutes.use(
  "/",
  lessonBusinessMiddleware,
);


export { lessonsRoutes }