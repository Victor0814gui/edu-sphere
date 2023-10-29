


declare namespace Schedule {
  type canceled = "canceled";
  type confirmed = "confirmed";

}


export type Schedule = {
  id: string;
  createdAt: Date;
  updatedAt?: Date | null;
  start: Date;
  end: Date;
  status: Schedule.canceled | Schedule.confirmed;
  title: string;
  description: string;
}