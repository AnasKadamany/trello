import React from "react";
import {
  IoSettingsOutline,
  IoMailOutline,
  IoSearchOutline,
} from "react-icons/io5";
import { FiBell, FiChevronDown } from "react-icons/fi";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { NavLink, useNavigate } from "react-router-dom";

const iconLinks = [
  { name: "settings", icon: <IoSettingsOutline /> },
  { name: "mail", icon: <IoMailOutline /> },
  { name: "bell", icon: <FiBell /> },
];

export default function TheDashboardHeader() {
  const mappedLinks = iconLinks.map((icon) => (
    <li key={icon.name} className="text-lg cursor-pointer">
      {icon.icon}
    </li>
  ));
  return (
    <div className="flex justify-between items-center w-full py-10 px-8">
      <h1 className="text-xl font-bold uppercase">
        <NavLink to={"/"}>Sokonekt</NavLink>{" "}
      </h1>
      <div className="flex justify-between items-center px-2 text-gray-500 bg-gray-300 w-80 h-8 rounded-lg">
        <p className="text-sm">Search</p>
        <IoSearchOutline />
      </div>
      <div className="flex items-center gap-14">
        <ul className="flex items-center gap-8">{mappedLinks}</ul>
        <div className="flex items-center gap-2 text-gray-500">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>FI</AvatarFallback>
          </Avatar>
          <FiChevronDown />
        </div>
      </div>
    </div>
  );
}
