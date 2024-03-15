import React from "react";

import Sidebar from "./Sidebar";
import { MdLogout } from "react-icons/md";
import { signOut } from "@/authentication/auth";

const SidebarWrapper = () => {
  return (
    <div className="flex flex-col    h-full">
      <Sidebar />
      <span
        className=" bottom-6 left-6 z-50 w-full h-[40px]  pl-6
  "
      >
        <form
          action={async () => {
            "use server";
            await signOut();
          }}
        >
          <button className="">
            {" "}
            <MdLogout className="text-xl text-teal-400" />
          </button>
        </form>
      </span>
    </div>
  );
};

export default SidebarWrapper;
