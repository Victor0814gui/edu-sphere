



export interface Room {
  id: string;
  title: string;
  description: string;
  teacherId: string;
  studentList?: any[]
  createdAt: Date;
  updatedAt?: Date | null;
  slug: string;
}