import { signOut } from "@/authentication/auth";
import React from "react";
import { MdLogout } from "react-icons/md";

const LogoutButton = () => {
  return (
    <span className="fixed bottom-6 left-6 z-50">
      <form
        action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button
          className={`text-lg  cursor-pointer text-teal-400 transition-all  flex items-center w-[255px] gap-20 hover:text-slate-200 `}
        >
          <MdLogout />
        </button>
      </form>
    </span>
  );
};

export default LogoutButton;
