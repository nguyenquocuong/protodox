export type User = {
  id: number;
  email: string;
  provider: string;
  socialId: string | null;
  firstName: string | null;
  lastName: string | null;
  createdAt: string;
  updatedAt: string;
  deletedAt: string | null;
};
