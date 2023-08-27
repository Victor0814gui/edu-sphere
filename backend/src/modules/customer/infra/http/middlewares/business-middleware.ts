import { Request, Response, NextFunction } from "express";
import UserBusinessException from "@customer/infra/exception/business-exception";
import AppErrors from "@/src/shared/infra/errors/app-errors";


const userBusinessMiddleware = <TError extends Error>(
  error: TError,
  request: Request,
  response: Response,
  next: NextFunction
): NextFunction => {

  console.log(error);

  if (error instanceof UserBusinessException) {
    throw new AppErrors(error.message, error.code, error.type);
  }

  return next;
}

export { userBusinessMiddleware };