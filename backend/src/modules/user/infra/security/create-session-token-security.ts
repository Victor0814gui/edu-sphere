import { sign } from "jsonwebtoken";



export namespace ICreateSessionTokenSecurity {
  export interface Params {
    userId: string;
    roles: string[];
    permissions: string[]
  }

  export interface Response extends String { };
}

class CreateSessionTokenSecurity {
  async execute({ userId, roles, permissions }: ICreateSessionTokenSecurity.Params):
    Promise<ICreateSessionTokenSecurity.Response> {


    const token = sign(
      {
        roles,
        permissions,
        userId,
      },
      process.env.JWT_SECRET as string,
      {
        subject: userId,
        expiresIn: process.env.JWT_EXPIRATION_TIME,
      }
    );

    return token;
  }
}

export { CreateSessionTokenSecurity };