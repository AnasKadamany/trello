import useFooterMenu from "@/hooks/useFooterMenu";

const contactLinks = [
  { href: "/email", name: "Email" },
  { href: "/phone-number", name: "Phone number" },
  { href: "/address", name: "Address" },
];

export default function FooterContact() {
  const { footerMenu } = useFooterMenu({
    menuTitle: "Contact Details",
    menuLinks: contactLinks,
  });
  return <>{footerMenu}</>;
}
