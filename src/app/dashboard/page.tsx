import { auth } from "@/authentication/auth";
import SignoutButton from "@/components/buttonLogout";
import React from "react";

const Dashboard = async () => {
  const session = await auth();
  console.log(session);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">
        Bem vindo ao Dashboard {session?.user?.name}{" "}
      </h1>
      <SignoutButton />
    </main>
  );
};

export default Dashboard;
