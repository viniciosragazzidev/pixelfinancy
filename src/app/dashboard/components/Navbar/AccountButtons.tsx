import React from "react";
import { FaBell, FaMoon, FaSun } from "react-icons/fa";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "@/lib/@types/apptypes";

const AccountButtons = ({ user }: { user: User }) => {
  return (
    <div className="flex items-center gap-6">
      <span className="">
        <FaMoon />
      </span>
      <span className="">
        <FaBell />
      </span>

      <DropdownMenu>
        <DropdownMenuTrigger>
          <div className="flex items-center gap-2">
            <Avatar className="w-8 h-8">
              <AvatarImage
                src="https://github.com/viniciosragazzi.png"
                alt="Your profile picture"
              />
              <AvatarFallback>VR</AvatarFallback>
            </Avatar>
            <span className="text-sm text-slate-200 font-semibold">
              {user.name}
            </span>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default AccountButtons;
