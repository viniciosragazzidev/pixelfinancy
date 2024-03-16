"use server";
import { sql } from "@vercel/postgres";
import { auth, signIn } from "./auth";
import { AuthError } from "next-auth";
import bcrypt from "bcrypt";
import { redirect } from "next/navigation";
import { User } from "@prisma/client";
// ...
export async function authenticate(
  prevState: string | undefined,
  formData: FormData
) {
  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function Signup(prevState: void | undefined, formData: FormData) {
  try {
    await sql`CREATE TABLE IF NOT EXISTS users (id varchar(255) primary key, name varchar(255), email varchar(255), password varchar(255));`;
    const id = crypto.randomUUID();
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const passwordEncrypted = await bcrypt.hash(password, 10);
    const createdAt = new Date().toISOString();
    const updatedAt = new Date().toISOString();
    await sql` INSERT INTO users (id,name, email, password, created_at, updated_at) VALUES ( ${id}, ${name}, ${email}, ${passwordEncrypted} , ${createdAt}, ${updatedAt}) ; `;
    redirect("/login");
  } catch (error) {
    throw error;
  }
}
