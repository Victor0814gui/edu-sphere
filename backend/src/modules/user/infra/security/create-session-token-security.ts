import { sign } from "jsonwebtoken";
import crypto from "crypto";



export namespace ICreateSessionTokenSecurity {
  export interface Params {
    userId: string;
    role: string;
    permissions: string[]
  }

  export interface Implementation {
    execute: (props: ICreateSessionTokenSecurity.Params) => string;
  }
}

class CreateSessionTokenSecurity
  implements ICreateSessionTokenSecurity.Implementation {
  execute(props: ICreateSessionTokenSecurity.Params): string {
    const token = sign(
      {
        role: props.role,
        permissions: props.permissions,
        userId: props.userId,
      },
      process.env.JWT_SECRET as string,
      {
        subject: props.userId,
        expiresIn: process.env.JWT_EXPIRATION_TIME,
      }
    );

    return token;
  }
}

export { CreateSessionTokenSecurity };