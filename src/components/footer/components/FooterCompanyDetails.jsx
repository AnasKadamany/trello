import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const socialMediaLinks = [
  { href: "facebook", name: "facebook", icon: <FiFacebook /> },
  { href: "twitter", name: "twitter", icon: <FiTwitter /> },
  { href: "instagram", name: "instagram", icon: <FiInstagram /> },
];

export default function FooterCompanyDetails() {
  const mappedSocialMediaLinks = socialMediaLinks.map((link) => (
    <NavLink key={link.href} to={link.href} className="flex items-center gap-1">
      {link.icon} {link.name}
    </NavLink>
  ));
  return (
    <div>
      <h2 className="uppercase font-semibold tracking-wide">Sokonet</h2>
      <p className="text-xs w-[200px] pt-3">
        Our expert financial consultants provide solutions to help you achieve
        financial wealth. Trust us to guide you toward a brighter financial
        future.
      </p>
      <div className="flex text-xs gap-3 items-center pt-4">
        {mappedSocialMediaLinks}
      </div>
    </div>
  );
}
