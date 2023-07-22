



export interface Room {
  id: string;
  name: string;
  description: string;
  teacherId: string;
  studentList?: any[]
  createdAt: Date;
  updatedAt?: Date | null;
}