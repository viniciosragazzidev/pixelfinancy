// layout

import Sidebar from "./components/Sidebar";
import { User } from "@/lib/@types/apptypes";
import { getCurrentUser } from "@/lib/requisitions";
import { MdFrontLoader } from "react-icons/md";

import FormProfileAndCompanyModal from "./components/ProfileAndCompanyForms/FormProfileAndCompanyModal";
import Navbar from "./components/Navbar/Navbar";

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
      ) : !user.profile || !user.Company ? (
        <FormProfileAndCompanyModal user={user} />
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
