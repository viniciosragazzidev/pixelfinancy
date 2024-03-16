import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import BreadCrumbComponent from "./BreadCrumb";
import AccountButtons from "./AccountButtons";
import { User } from "@/lib/@types/apptypes";

const Navbar = ({ user }: { user: User }) => {
  console.log(user);

  return (
    <nav className="bg-slate-950 text-slate-200 p-4 w-full h-16 flex items-center justify-between">
      <BreadCrumbComponent />
      <AccountButtons user={user} />
    </nav>
  );
};

export default Navbar;
