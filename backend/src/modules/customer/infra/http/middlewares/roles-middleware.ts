import { Request, Response, NextFunction } from "express";

function rolesMiddleware(requiredRoles: string) {
  return async (request: Request, response: Response, next: NextFunction) => {
    const { role } = request;

    if (!role) {
      return response.status(404).json({
        message: "roles does not exists",
        type: "error"
      })
    }


    const permissionsExists = requiredRoles.includes(role);

    if (!permissionsExists) {
      return response.status(403).json({
        message: "you do not have authorization to perform this action",
        type: "error"
      })
    }
    return next();
  }
}

export { rolesMiddleware }