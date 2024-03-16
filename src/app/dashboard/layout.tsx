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
  const user: User = {
    id: "12345",
    name: "Alice",
    surname: "Johnson",
    email: "alice@example.com",
    password: "securepassword",
    createdAt: new Date("2024-03-16T12:00:00Z"),
    updatedAt: new Date("2024-03-16T14:30:00Z"),
    posts: [],
    profile: [],
    companyId: "6789",
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
