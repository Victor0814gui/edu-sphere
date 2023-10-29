



export interface Room {
  id: string;
  title: string;
  description: string;
  authorId: string;
  studentList?: any[]
  createdAt: Date;
  updatedAt?: Date | null;
  slug: string;
}