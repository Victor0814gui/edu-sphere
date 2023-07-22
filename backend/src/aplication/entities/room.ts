



export interface Room {
  id: string;
  name: string;
  description: string;
  title: string;
  teacherId: string;
  studentList?: any[]
  createdAt: Date;
  updatedAt?: Date | null;
}