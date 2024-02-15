import { Request, Response, NextFunction } from "express";

import { verify } from "jsonwebtoken"


type PermissionAndRoles = {
  name: string
}

interface IPayload {
  sub: string,
  permissions: string[];
  role: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {
  const authToken = request.headers.authorization

  if (!authToken) {
    return response.status(401).json({
      errorCode: "token_invalid",
    })
  }

  const [, token] = authToken.split(" ")

  try {
    const { sub, permissions, role } = verify(token, process.env.JWT_SECRET as string) as IPayload
    request.customerId = sub;
    request.permissions = permissions;
    request.role = role;

    return next()
  } catch (err) {
    return response.status(401).json({
      message: "token expired",
      type: "unauthorized"
    })
  }
}