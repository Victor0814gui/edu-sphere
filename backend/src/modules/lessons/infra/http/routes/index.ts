import { Router } from "express"
import { container } from "tsyringe";
import { CreateLessonController } from "../controllers/create-lesson-controller";
import { upload } from "../gateways/upload-files";

const lessonsRoutes = Router();
const createLessonController = container.resolve(CreateLessonController)


lessonsRoutes.post(
  "/lessons",
  upload.array('files', 12),
  createLessonController.handler,
)

export { lessonsRoutes }