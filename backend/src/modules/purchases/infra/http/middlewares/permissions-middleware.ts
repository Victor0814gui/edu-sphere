import { Request, Response, NextFunction } from "express";


function permissionsMiddleware(requiredPermissions: string[]) {
  return async (request: Request, response: Response, next: NextFunction) => {
    const { permissions } = request;

    if (permissions.length == 0) {
      return response.status(404).json({
        message: "You need to activate your account to proceed",
        type: "error"
      })
    }

    const permissionsExists = permissions.some(permission =>
      requiredPermissions.includes(permission)
    );

    if (!permissionsExists) {
      return response.status(403).json({
        message: "you do not have authorization to perform this action",
        type: "error"
      })
    }
    return next();
  }
}

export { permissionsMiddleware }