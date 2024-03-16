export type roles = "manager" | "billing" | "user" | "guest";

export type permissionsType = "view" | "edit" | "create" | "delete";
export type User = {
  id: string;
  name?: string | null;
  surname?: string | null;
  email?: string | null;
  password?: string | null;
  createdAt: Date;
  updatedAt: Date;
  posts?: [] | null;
  profile?: [] | null;
  companyId?: string | null;
  Company?: [] | null;
};
