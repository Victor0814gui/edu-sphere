import { Request, Response, NextFunction } from "express";
import RoomBusinessException from "@room/infra/exceptions/business-exception";
import AppErrors from "@/src/shared/infra/errors/app-errors";


const roomBusinessMiddleware = <TError extends Error>(
  error: TError,
  request: Request,
  response: Response,
  next: NextFunction
): NextFunction => {

  console.log(error);

  if (error instanceof RoomBusinessException) {
    throw new AppErrors(error.message, error.code, error.type);
  }

  return next;
}

export { roomBusinessMiddleware };