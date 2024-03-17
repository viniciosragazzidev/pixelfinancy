import Logo from "@/components/logo";
import React from "react";
import AccountButtons from "../Navbar/AccountButtons";
import { User } from "@/lib/@types/apptypes";
import FormProfileAndCompanyController from "./FormProfileAndCompanyController";

const FormProfileAndCompanyModal = ({ user }: { user: User }) => {
  return (
    <>
      <div className="fixed w-full h-full bg-slate-950 top-0 left-0 text-slate-900 ">
        <div className=" w-full h-full overflow-hidden   flex  flex-col gap-5   bg-slate-100 rounded-2xl ">
          <nav className="flex justify-between w-full h-16 bg-slate-950 px-6 items-center">
            <Logo type="light" classNameBadge="text-teal-500" />
            <span className="text-xs font-bold text-slate-200 uppercase">
              Coleta de dados importantes
            </span>
            <AccountButtons mode="simple" user={user} />
          </nav>
          <FormProfileAndCompanyController user={user} />
        </div>
      </div>
    </>
  );
};

export default FormProfileAndCompanyModal;
