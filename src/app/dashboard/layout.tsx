// layout

import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar";
import { auth } from "@/authentication/auth";
import { User } from "@/lib/@types/apptypes";
import { getCurrentUser } from "@/lib/requisitions";
import { FaTruckLoading } from "react-icons/fa";
import { MdFrontLoader } from "react-icons/md";

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
        <div className="w-screen h-screen fixed top-0 left-0 bg-slate-950 z-[100]">
          <span>
            <MdFrontLoader className="text-8xl text-slate-200 animate-spin" />
          </span>
        </div>
      ) : !user.profile ? (
        <div className="w-screen h-screen flex justify-center items-center">
          <span className="text-5xl font-semibold text-slate-900">
            Sem profile
          </span>
        </div>
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
