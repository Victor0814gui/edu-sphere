import { Request, Response, NextFunction } from "express";
import { CustomerBusinessException } from "@customer/infra/exceptions/business-exception";
import AppErrors from "@/src/shared/infra/errors/app-errors";
import { PurchaseBusinessException } from "../../exceptions/business-exception";


const userBusinessMiddleware = <TError extends Error>(
  error: TError,
  request: Request,
  response: Response,
  next: NextFunction
): NextFunction => {

  console.log(error);

  if (error instanceof PurchaseBusinessException) {
    throw new AppErrors(error.message, error.code, error.type);
  }

  return next;
}

export { userBusinessMiddleware };