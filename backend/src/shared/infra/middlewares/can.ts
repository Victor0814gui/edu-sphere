import { Request, Response, NextFunction } from "express";

function can(requiredPermissions: string) {
  return async (request: Request, response: Response, next: NextFunction) => {
    let permissionsArray: string[] = [];
    const { userId, roles, permissions } = request;

    permissions.find(permission => permissionsArray.push(permission))

    if (!userId && !roles && !permissions) {
      return response.status(400).json({
        message: "User does not exists",
        type: "error"
      })
    }

    const permissionsExists = requiredPermissions.every(permission => {
      return permissionsArray.includes(permission)
    })

    if (!permissionsExists) {
      return response.status(403).end();
    }

    permissionsArray = []

    return next();
  }
}

function is(requiredRoles: string[]) {
  return async (request: Request, response: Response, next: NextFunction) => {
    const { user_id, roles, permissions } = request;

    if (!user_id && !roles[0] && !permissions[0]) {
      return response.status(400).json({
        message: "User does not exists",
        type: "error"
      })
    }

    const roleExists = requiredRoles
      .some((role) => {
        role === roles[0]
      });

    if (!roleExists) {
      return response.status(403).end();
    }

    return next();
  }
}


export { can, is }