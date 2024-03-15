import { auth } from "@/authentication/auth";
import SignoutButton from "@/components/buttonLogout";
import React from "react";

const Dashboard = async () => {
  const session = await auth();
  console.log(session);

  return (
    <main className="flex w-full min-h-screen flex-col items-center justify-between p-24"></main>
  );
};

export default Dashboard;
