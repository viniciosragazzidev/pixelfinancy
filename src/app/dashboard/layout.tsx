// layout

import { getCurrentUser, getUser } from "@/authentication/actions";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar";
import { auth } from "@/authentication/auth";
import { User } from "@/lib/@types/apptypes";
import { FaTruckLoading } from "react-icons/fa";
import { MdFrontLoader } from "react-icons/md";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const user: User = await getCurrentUser();
  // console.log(user);
  const user = {
    id: "41217afb-448a-4f16-bf41-d4802dbd5e83",
    name: "Vinicios Ragazzi",
    surname: null,
    email: "viniciosragazzzi@gmail.com",
    password: "$2b$10$yLGaWR7.hLx6td7zbzzqzeipMZ849ZpwO.ggZswsiBkyvC18CWK6y",
    createdAt: new Date(),
    updatedAt: new Date(),
    profile: [],
    Company: [],
  };
  return (
    <>
      {!user ? (
        <div className="w-screen h-screen fixed top-0 left-0 bg-slate-950 z-[100]">
          <span>
            <MdFrontLoader className="text-8xl text-slate-200 animate-spin" />
          </span>
        </div>
      ) : !user.profile ? (
        <span>ddd</span>
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
