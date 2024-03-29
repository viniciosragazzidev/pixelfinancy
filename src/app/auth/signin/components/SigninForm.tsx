"use client";

import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "../../../../authentication/actions";
import { MdOutlineMail, MdPassword } from "react-icons/md";
import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

export default function SigninForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form
      action={dispatch}
      className="space-y-3 w-full h-full flex-1 flex flex-col justify-center items-center slideRightToLeft"
    >
      <div className="flex-1 rounded-lg w-full  h-full max-w-sm flex flex-col justify-center  px-6 pb-4 pt-8 gap-5">
        <div className="flex flex-col gap-1">
          <h1 className="text-4xl font-bold ">Login</h1>
          <div className=" w-full flex flex-col  max-w-xs ">
            <label
              className="mb-3 mt-5 block text-slate-200 font-semibold text-sm"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative w-full rounded-2xl border border-slate-500  flex items-center px-2 py-1">
              <span className="text-slate-200 text-lg">
                <MdOutlineMail />
              </span>
              <input
                className="block w-full bg-transparent  px-4 py-2 dark text-sm outline-none"
                id="email"
                type="email"
                name="email"
                placeholder="seuemail@email.com"
                required
              />
            </div>
          </div>
          <div className=" w-full flex flex-col  max-w-xs ">
            <label
              className="mb-3 mt-5 block text-slate-200 font-semibold text-sm"
              htmlFor="password"
            >
              Senha
            </label>
            <div className="relative w-full rounded-2xl border border-slate-500  flex items-center px-2 py-1">
              <span className="text-slate-200 text-lg">
                <MdPassword />
              </span>
              <input
                className="block w-full bg-transparent  px-4 py-2 dark text-sm outline-none"
                id="password"
                type="password"
                name="password"
                placeholder="********"
                required
              />
            </div>
          </div>
          {errorMessage && <div className="text-red-500">{errorMessage}</div>}

          <SigninButton />
        </div>

        <span className="text-sm w-full flex justify-center gap-1">
          Ainda nao tem uma conta?{" "}
          <Link href="/auth/signup" className="text-teal-500 fontb">
            Cadastre-se
          </Link>
        </span>

        <span className="text-sm w-full flex justify-center mt-4 "> ou </span>

        <button className="mt-4 w-full  bg-slate-900 py-2 rounded-xl font-medium text-white hover:bg-app-background transition-all flex items-center justify-center gap-2">
          <FaGoogle className="text-teal-500" /> Google
        </button>
      </div>
    </form>
  );
}

function SigninButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="mt-4 w-full  bg-teal-900 border border-teal-500 py-2 rounded-xl font-medium text-slate-200 hover:bg-teal-800 transition-all"
      aria-disabled={pending}
    >
      Entrar
    </button>
  );
}
