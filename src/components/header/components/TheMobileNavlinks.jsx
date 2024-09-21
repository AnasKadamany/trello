import { navLinks } from "@/utils/nav-links";
import { NavLink } from "react-router-dom";

import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FiMenu } from "react-icons/fi";
import TheAuthButtons from "./TheAuthButtons";

export default function TheMobileNavlinks() {
  const mappedMobileNavLinks = navLinks.map((link) => (
    <li key={link.href} className="border-b pb-3 w-3/4">
      <NavLink className="relative font-semibold text-sm uppercase w-fit block after:block after:content-[''] after:bg-[#001480] after:absolute after:h-[2px] after:w-2/4 after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left">
        {link.handle}
      </NavLink>
    </li>
  ));
  return (
    <Sheet>
      <SheetTrigger>
        <FiMenu size={30} />
      </SheetTrigger>
      <SheetContent side={"left"}>
        <ul className="flex flex-col gap-8 w-full pt-12 pl-5 text-lg uppercase tracking-wider">
          {mappedMobileNavLinks}
        </ul>
        <SheetFooter className="pt-36 md:hidden">
          <TheAuthButtons />
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
