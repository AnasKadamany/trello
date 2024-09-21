import { FaHome } from "react-icons/fa";
import { IoCreate, IoCar } from "react-icons/io5";
import { HiCog6Tooth } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
export const adminLinks = [
  { href: "/", name: "Home", icon: <FaHome /> },
  { href: "/admin/post-car", name: "Post a rental", icon: <IoCreate /> },
  { href: "/admin/rented-cars", name: "Rented cars", icon: <IoCar /> },
  { href: "/admin/design", name: "Design", icon: <HiCog6Tooth /> },
];

export default function TheToolbar() {
  const mappedLinks = adminLinks.map((link) => (
    <li
      key={link.href}
      className="w-full transition ease-in-out duration-300 rounded-md hover:bg-gray-200 hover:text-gray-600 uppercase tracking-wider text-sm p-2"
    >
      <NavLink href={link.href} className="flex items-center gap-3">
        {link.icon}
        {link.name}
      </NavLink>
    </li>
  ));
  return (
    <ul className="flex shadow-lg w-60 bg-[#F5F5F5] text-gray-500 h-full flex-col items-start gap-5 px-4 py-5">
      {mappedLinks}
    </ul>
  );
}
