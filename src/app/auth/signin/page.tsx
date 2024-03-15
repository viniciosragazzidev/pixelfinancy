"use client";
import React from "react";
import SigninForm from "./components/SigninForm";
import imageDash from "../../../assets/1.png";
import Logo from "@/components/logo";
import Image from "next/image";
import Link from "next/link";
const Signin = () => {
  return (
    <main className="flex h-screen  items-center justify-between">
      <div className="bg-slate-900 w-full h-full flex-1 py-10 hidden lg:block">
        <div className="container h-full slideLeftToRight">
          <Logo />
          <div className=" w-full h-full flex flex-col justify-around  px-7 gap-10 ">
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-semibold">
                Projetado para suporte{" "}
                <span className="text-teal-500">logístico completo</span>
              </h1>
              <p className="text-slate-300 font-extralight text-lg">
                {" "}
                Visualize todas as análises e faça seu negócio crescer de
                qualquer lugar.
              </p>
            </div>
            <Link
              href="/auth/signup"
              className="cursor-pointer btn  bg-slate-800  w-[80%] self-center  text-slate-200 hover:bg-teal-800"
            >
              Crie sua conta
            </Link>
          </div>
        </div>
      </div>
      <SigninForm />
    </main>
  );
};

export default Signin;
