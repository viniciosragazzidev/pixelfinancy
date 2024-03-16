import Logo from "@/components/logo";
import React from "react";
import SidebarItems from "./SidebarItems";
import LogoutButton from "./Logout";

const Sidebar = () => {
  return (
    <div className="w-[74px] h-screen  bg-slate-950">
      <SidebarItems />
      <LogoutButton />
    </div>
  );
};

export default Sidebar;
