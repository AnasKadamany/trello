import { NavLink } from "react-router-dom";

export default function useFooterMenu({ menuTitle, menuLinks }) {
  const mappedMenuLinks = menuLinks.map((link) => (
    <NavLink to={link.href} key={link.href}>
      {link.name}
    </NavLink>
  ));

  const footerMenu = (
    <div>
      <h2 className="hidden md:text-sm md:font-semibold">{menuTitle}</h2>
      <div className="text-xs md:pt-4 flex flex-col gap-3">{mappedMenuLinks}</div>
    </div>
  );
  return { footerMenu };
}
