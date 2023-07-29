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
    return response.status(error.code).json({
      status: 'error',
      message: error.message,
    });
  }

  console.log(error);
  if (error instanceof Error) {
    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Unknown internal server error',
  })
}

export { captureErrorsMiddlewrare };