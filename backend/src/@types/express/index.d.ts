

declare namespace Express {
  export interface Request {
    userId: string;
    permissions: string[];
    roles: string;
  }
}