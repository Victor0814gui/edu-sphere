import { Request, Response, NextFunction } from "express";
import AppErrors from "../errors/app-errors";
import { PurchaseBusinessException } from "@/src/modules/purchases/infra/exceptions/business-exception";
import RoomBusinessException from "@/src/modules/room/infra/exceptions/business-exception";
import CustomerBusinessException from "@/src/modules/customer/infra/exceptions/business-exception";
import { LessonBusinessException } from "@/src/modules/lessons/infra/exceptions/business-exception";
import { FeedbackBusinessException } from "@/src/modules/feedback/infra/exceptions/business-exception";


type Capture = {
  status: string;
  message: string;
}

const captureErrorsMiddlewrare = (
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction
): Response<Capture> => {

  if (
    error instanceof AppErrors
    || error instanceof CustomerBusinessException
    || error instanceof PurchaseBusinessException
    || error instanceof RoomBusinessException
    || error instanceof LessonBusinessException
    || error instanceof FeedbackBusinessException
  ) {
    console.log("intance AppErrors", error);
    console.log(error);
    return response.status(error.code).json({
      status: error.type,
      message: error.message,
    });
  }

  if (error instanceof Error) {
    console.log("intance Error", error);
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }

  console.log("unknow error", error);
  return response.status(500).json({
    status: 'error',
    message: 'Unknown internal server error',
  })
}

export { captureErrorsMiddlewrare };