import { auth } from "@/authentication/auth";

const BASE_URL = process.env.BASE_URL || "http://localhost:3000/";

export async function getUser(email: string) {
  try {
    const user = await fetch(`${BASE_URL}/api/users?email=${email}`, {
      next: { revalidate: 10, tags: ["user"] },
    });
    if (!user.ok) return undefined;
    const data = await user.json();
    return data.users[0];
  } catch (error) {
    console.error("Failed to fetch user:", error);
    throw new Error("Failed to fetch user");
  }
}

export async function getCurrentUser() {
  const currentSession = await auth();

  if (!currentSession) {
    return undefined;
  } else {
    const user = await getUser(currentSession.user?.email || "");
    if (!user) return undefined;
    return user;
  }
}
