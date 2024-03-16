import prisma from "@/database/prisma";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  try {
    if (email) {
      const users = await prisma.user.findMany({
        where: {
          email,
        },
        include: {
          profile: true,
          Company: true,
        },
      });

      if (users.length > 0) {
        return NextResponse.json({ users }, { status: 200 });
      } else {
        throw new Error("User not found");
      }
    } else {
      const users = await prisma.user.findMany();

      return NextResponse.json({ users }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
