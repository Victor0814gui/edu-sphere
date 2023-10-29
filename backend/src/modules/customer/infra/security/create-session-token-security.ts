import { sign } from "jsonwebtoken";


export namespace ICreateSessionTokenSecurity {
  export interface Params {
    customerId: string;
    roles: string[];
    permissions: string[]
  }

  export type Response = string;

  export interface Implementation {
    execute: (props: ICreateSessionTokenSecurity.Params)
      => ICreateSessionTokenSecurity.Response;
  }
}

class CreateSessionTokenSecurity
  implements ICreateSessionTokenSecurity.Implementation {
  execute(props: ICreateSessionTokenSecurity.Params):
    ICreateSessionTokenSecurity.Response {
    const token = sign(
      {
        roles: props.roles,
        permissions: props.permissions,
        userId: props.customerId,
      },
      process.env.JWT_SECRET as string,
      {
        subject: props.customerId,
        expiresIn: process.env.JWT_EXPIRATION_TIME,
      }
    );

    return token;
  }
}

export { CreateSessionTokenSecurity };