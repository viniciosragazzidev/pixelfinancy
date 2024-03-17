"use client";
import { Silkscreen } from "next/font/google";
const silkscreen = Silkscreen({ subsets: ["latin"], weight: "400" });
import { twMerge } from "tailwind-merge";
import { Badge } from "./badge";
const Logo = ({
  className,
  classNameBadge,
  textComplete,
  type,
}: {
  className?: string;
  classNameBadge?: string;
  textComplete?: boolean;
  type?: "dark" | "light";
}) => {
  return (
    <h1
      className={twMerge(
        silkscreen.className,
        `text-5xl font-semibold  ${
          type === "dark" ? "text-slate-950" : "text-teal-400"
        } flex  items-center gap-2`,
        className
      )}
    >
      {textComplete ? (
        <span>
          Pixel
          <span
            className={` ${
              type === "dark" ? "text-slate-950" : "text-slate-200"
            }`}
          >
            99
          </span>
        </span>
      ) : (
        "P"
      )}
      <Badge className={classNameBadge} variant="ghost">
        BETA
      </Badge>
    </h1>
  );
};

export default Logo;
