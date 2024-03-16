"use client";
import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";

const BreadCrumbComponent = () => {
  const path = usePathname();
  const pathSplited = path?.split("/");
  console.log(pathSplited);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {pathSplited?.map((item, index) => {
          if (index !== 0) {
            return (
              <>
                <BreadcrumbItem key={index}>
                  <BreadcrumbLink
                    href={`${
                      index - 1 === 0
                        ? `/${item}`
                        : `/${pathSplited[index - 1]}/${item}`
                    }`}
                  >
                    <BreadcrumbPage
                      className={`text-slate-200 capitalize ${
                        index === pathSplited.length - 1 &&
                        index - 1 !== 0 &&
                        "text-teal-400 font-bold"
                      }`}
                    >
                      {item}
                    </BreadcrumbPage>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                {index !== pathSplited.length - 1 && (
                  <BreadcrumbSeparator key={index} />
                )}
              </>
            );
          }
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default BreadCrumbComponent;
