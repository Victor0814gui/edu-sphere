import { Request, Response, NextFunction } from "express";

function is(requiredRoles: string) {
  return async (request: Request, response: Response, next: NextFunction) => {
    const { roles } = request;

    if (!roles) {
      return response.status(404).json({
        message: "roles does not exists",
        type: "error"
      })
    }


    const permissionsExists = requiredRoles.includes(roles);

    if (!permissionsExists) {
      return response.status(403).json({
        message: "you do not have authorization to perform this action",
        type: "error"
      })
    }
    return next();
  }
}

export { is }