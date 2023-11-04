import { Request, Response, NextFunction } from "express";
import { CustomerBusinessException } from "@customer/infra/exceptions/business-exception";
import AppErrors from "@/src/shared/infra/errors/app-errors";


const customerBusinessMiddleware = <TError extends Error>(
  error: TError,
  request: Request,
  response: Response,
  next: NextFunction
): void => {

  const instance = error instanceof CustomerBusinessException
  console.log(instance)
  if (error instanceof CustomerBusinessException) {
    console.log({
      message: error.message, code: error.code, type: error.type
    });
    next(error);
  }
  next(new AppErrors("[customer] unknown internal server error", 500));
}

export { customerBusinessMiddleware };