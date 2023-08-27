import { Request, Response, NextFunction } from "express";

function can(requiredPermissions: string) {
  return async (request: Request, response: Response, next: NextFunction) => {
    const { permissions } = request;

    if (permissions.length == 0) {
      return response.status(404).json({
        message: "User does not exists",
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

export { can }