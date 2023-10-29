import { Request, Response, NextFunction } from "express";
import AppErrors from "@/src/shared/infra/errors/app-errors";
import { LessonBusinessException } from "../../exceptions/business-exception";


const lessonBusinessMiddleware = <TError extends Error>(
  error: TError,
  request: Request,
  response: Response,
  next: NextFunction
): NextFunction => {

  console.log(error);

  if (error instanceof LessonBusinessException) {
    throw new AppErrors(error.message, error.code, error.type);
  }

  return next;
}

export { lessonBusinessMiddleware };