import { NavLink } from "react-router-dom";
import {
  NavigationMenuItem,
  NavigationMenu,
  NavigationMenuList,
} from "../../ui/navigation-menu";
import { navLinks } from "@/utils/nav-links";

// <<<<<<< HEAD
// =======
// const navLinks = [
//   { href: "/", handle: "Home" },
//   { href: "/features", handle: "Features" },
//   { href: "/pricing", handle: "Pricing" },
//   { href: "/help", handle: "Help" },
// ];
// >>>>>>> 6375cd769afb86f6b665109f98f413aa15576196

export default function TheNavBar() {
  const mappedNavLinks = navLinks.map((link) => (
    <NavigationMenuItem key={link.href}>
      <NavLink
        to={link.href}
        className="relative font-semibold text-sm uppercase w-fit block after:block after:content-[''] after:bg-[#001480] after:absolute after:h-[2px] after:w-2/4 after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
      >
        {link.handle}
      </NavLink>
    </NavigationMenuItem>
  ));
  return (
    <NavigationMenu>
      <NavigationMenuList className="flex gap-6">
        {mappedNavLinks}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
