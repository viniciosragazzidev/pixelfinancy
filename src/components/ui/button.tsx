"use client";
import React from "react";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  type: "button" | "submit" | "reset" | undefined;
  className: string;
  mode: string;
  children: React.ReactNode;
};

const Button = ({ type, className, mode, children }: ButtonProps) => {
  const [style, setStyle] = React.useState("");
  switch (mode) {
    case "primary": {
      setStyle("bg-teal-900 border border-teal-500");
    }
  }
  return (
    <button
      type={type}
      className={twMerge(
        `${className} ${style} rounded-xl font-medium text-slate-200 hover:bg-teal-800 transition-all`
      )}
    >
      {children}
    </button>
  );
};

export default Button;
