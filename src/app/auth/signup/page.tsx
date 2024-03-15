"use client";
import React from "react";
import { SignupForm } from "./components/SignupForm";
import Link from "next/link";
import Logo from "@/components/logo";
const Signup = () => {
  return (
    <main className="flex h-screen  items-center justify-between flex-row-reverse">
      <div className="bg-app-background w-full h-full flex-1 py-10 hidden lg:block">
        <div className="container h-full slideRightToLeft">
          <Logo />
          <div className=" w-full h-full flex flex-col justify-around  px-7 gap-10 ">
            <div className="flex flex-col gap-3">
              <h1 className="text-3xl font-semibold">
                Junte-se a a{" "}
                <span className="text-teal-500 font-bold">Pixel99</span> para
                evoluir seu negócio.
              </h1>
              <p className="text-slate-300 font-extralight text-lg">
                {" "}
                Visualize todas as analises e faça seu negócio crescer de
                qualquer lugar.
              </p>
            </div>
            <Link
              href="/auth/signin"
              className="cursor-pointer btn  bg-slate-800  w-[80%] self-center  text-slate-200 hover:bg-teal-800"
            >
              Entrar com uma conta
            </Link>
          </div>
        </div>
      </div>
      <SignupForm />
    </main>
  );
};

export default Signup;
