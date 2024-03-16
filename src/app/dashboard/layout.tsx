// layout

import { getCurrentUser, getUser } from "@/authentication/actions";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar";
import { auth } from "@/authentication/auth";
import { User } from "@/lib/@types/apptypes";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user: User = await getCurrentUser();
  console.log(user);

  return (
    <>
      {!user ? (
        <div className="w-screen h-screen fixed top-0 left-0 bg-slate-950 z-[100]"></div>
      ) : (
        <div className="flex  w-screen h-screen">
          <Sidebar />
          <div className="flex flex-col w-full">
            <Navbar user={user} />
            {children}
          </div>
        </div>
      )}
    </>
  );
}
