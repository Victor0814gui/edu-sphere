

declare namespace Express {
  export interface Request {
    customerId: string;
    permissions: string[];
    role: string;
  }
}