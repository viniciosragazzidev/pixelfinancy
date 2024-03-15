"use client";

import React, { useEffect } from "react";

import { usePathname, useRouter } from "next/navigation";
import Error from "@/app/not-found";

const DashboardWrapper = () => {
  const pathname = usePathname();

  //   Renderiza o componente apropriado com base no segmento do URL
  const renderPageComponent = () => {
    switch (pathname) {
      case "/dashboard/servicos":
        return (
          <>
            <h1 className="text-3xl font-bold">Servicos</h1>
          </>
        );

      default:
        return (
          <div className="   w-screen  h-screen top-0 left-0 fixed bg-slate-950 z-50 flex flex-col space-y-6 p-6 bg-opacity-80 backdrop-blur-lg">
            <Error />
          </div>
        );
    }
  };

  return <div className="flex  w-full flex-col">{renderPageComponent()}</div>;
};

export default DashboardWrapper;
