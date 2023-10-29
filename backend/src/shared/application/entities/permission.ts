



export interface Permission {
  id: string;
  name: string;
  level: number;
  description: string;
  createdAt: Date;
  updatedAt: Date | null;
}