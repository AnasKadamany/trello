import useFooterMenu from "@/hooks/useFooterMenu";

const servicesLinks = [
  { href: "/content-management", name: "Content Management" },
  { href: "/analytics", name: "Analytics" },
];

export default function FooterServices() {
  const { footerMenu } = useFooterMenu({
    menuTitle: "Our Services",
    menuLinks: servicesLinks,
  });

  return <>{footerMenu}</>;
}
