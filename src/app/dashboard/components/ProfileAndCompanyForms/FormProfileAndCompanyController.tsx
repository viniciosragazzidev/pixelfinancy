"use client";
import { User } from "@/lib/@types/apptypes";
import React, { useEffect } from "react";
import { IoIosArrowForward } from "react-icons/io";
import FormProfile from "./FormProfile";
import FormCompany from "./FormCompany";

const FormProfileAndCompanyController = ({ user }: { user: User }) => {
  const [step, setStep] = React.useState(1);

  useEffect(() => {
    if (user.profile) {
      setStep(2);
    }
  }, [user]);
  return (
    <div className="flex flex-col gap-10 p-4">
      <div className="flex items-center w-full gap-8">
        <div
          className={`text-sm font-semibold flex gap-2 items-center ${
            step !== 1
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          }`}
        >
          <div
            className={`w-8 h-8 flex items-center justify-center  rounded-full ${
              step === 1
                ? "bg-slate-800 text-teal-400"
                : " bg-slate-200 text-slate-800"
            }`}
          >
            1
          </div>{" "}
          <span
            className={`${step !== 1 ? "text-slate-400" : "text-slate-800"}`}
          >
            {" "}
            Informações pessoais
          </span>
        </div>
        <span className="flex items-center ">
          <IoIosArrowForward />
        </span>
        <div
          className={`text-sm font-semibold flex gap-2 items-center ${
            step !== 2
              ? "opacity-50 cursor-not-allowed"
              : "opacity-100 cursor-pointer"
          }`}
        >
          <div
            className={`w-8 h-8 flex items-center justify-center  rounded-full ${
              step === 2
                ? "bg-slate-800 text-teal-400"
                : " bg-slate-200 text-slate-800"
            }`}
          >
            2
          </div>{" "}
          <span> Informações da empresa</span>
        </div>
      </div>

      {step === 1 ? <FormProfile /> : <FormCompany />}
    </div>
  );
};

export default FormProfileAndCompanyController;
