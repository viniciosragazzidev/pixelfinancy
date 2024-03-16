"use client";

import React from "react";
import { FaHammer, FaHome, FaList, FaWallet } from "react-icons/fa";
import { FaGear, FaPersonCane, FaX } from "react-icons/fa6";

import { HiMenu } from "react-icons/hi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Logo from "@/components/logo";

const SidebarItems = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname().split("/")[2];
  const pathnameExact =
    pathname === "servicos"
      ? "serviços"
      : pathname === "vendas"
      ? "vendas"
      : pathname === "clientes"
      ? "clientes"
      : pathname === "relatorios"
      ? "relatórios"
      : pathname === "configuracoes"
      ? "configurações"
      : "home";

  //console.log(pathname, pathnameExact);

  const items = [
    {
      name: "Home",
      icon: <FaHome />,
      href: "/dashboard",
    },
    {
      name: "Serviços",
      icon: <FaHammer />,
      href: "/dashboard/servicos",
    },
    {
      name: "Vendas",
      icon: <FaWallet />,
      href: "/dashboard/vendas",
    },
    {
      name: "Clientes",
      icon: <FaPersonCane />,
      href: "/dashboard/clientes",
    },
    {
      name: "Relatórios",
      icon: <FaList />,
      href: "/dashboard/relatorios",
    },
  ];
  return (
    <aside className="w-full h-full">
      <>
        <div
          className={`w-full h-screen fixed top-0 left-0 z-40  ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={() => setIsOpen(false)}
        ></div>
        <div
          className={`h-screen w-[200px] fixed top-0 left-0 bg-slate-950 transition-transform ${
            isOpen ? "translate-x-[74px]" : "translate-x-[-270px]"
          }`}
        >
          <div className="flex flex-col  pt-6 items-center gap-4">
            <Logo />
          </div>
        </div>
        <div className="flex   h-screen relative top-0 left-0 bg-slate-950  ">
          <div
            className={`fixed w-full flex space-y-16  flex-col  px-4   py-10  pb-24 max-w-[74px] h-full top-0 left-0 bg-slate-950 z-50 border-r border-slate-700 border-opacity-30 transition-all`}
          >
            <div className={`flex ${isOpen ? "flex-row" : "flex-col"} gap-4 `}>
              <Logo
                classNameBadge={"hidden"}
                className={isOpen ? "hidden" : ""}
              />

              <span
                onClick={() => setIsOpen(!isOpen)}
                className={`text-3xl text-slate-700  cursor-pointer self-center hover:text-teal-400 transition-all `}
              >
                {!isOpen ? <HiMenu /> : <FaX className="text-2xl" />}
              </span>
            </div>

            <nav>
              <ul
                className={`flex  flex-col  ${
                  isOpen ? "space-y-14" : "space-y-10"
                }`}
              >
                {items.map((item, index) => (
                  <Link
                    href={item.href}
                    key={index}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg  cursor-pointer text-teal-400 transition-all  flex items-center w-[255px] gap-20 hover:text-slate-200 `}
                  >
                    <span
                      className={`bg-slate-900  ${
                        pathnameExact === item.name.toLowerCase() &&
                        "bg-teal-200 text-slate-900"
                      }   p-2 rounded-lg `}
                    >
                      {item.icon}
                    </span>
                    <span
                      className={`text-sm text-slate-200 ${
                        !isOpen ? "opacity-0" : "opacity-100"
                      }`}
                    >
                      {item.name}
                    </span>
                  </Link>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </>
    </aside>
  );
};

export default SidebarItems;
