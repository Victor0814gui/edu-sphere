




export type VerificationCode = {
  id: string;
  code: string;
  createdAt: Date;
  activatedAt?: Date | null;
  userId: string;
}