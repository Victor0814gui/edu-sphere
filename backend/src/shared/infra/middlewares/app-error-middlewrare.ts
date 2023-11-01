import { Request, Response, NextFunction } from "express";
import AppErrors from "../errors/app-errors";


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

  if (error instanceof AppErrors) {
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