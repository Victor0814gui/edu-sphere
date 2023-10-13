import { Router } from "express"
import { container } from "tsyringe";
import { CreateLessonController } from "../controllers/create-lesson-controller";
import { upload } from "../gateways/upload-files";
import { CreateCommentLessonController } from "../controllers/create-comment-lesson-controller";

const lessonsRoutes = Router();
const createLessonController = container.resolve(CreateLessonController)
const createCommentLessonController = container.resolve(CreateCommentLessonController)

lessonsRoutes.post(
  "/lessons",
  upload.array('files', 12),
  createLessonController.handler,
)

lessonsRoutes.post(
  "/lessons/message",
  createCommentLessonController.handler,
)

export { lessonsRoutes }