import { User } from "./user";





export interface RefreshToken {
  id: string;
  refreshToke: string;
  state: string;
  expiryDate: Date
}