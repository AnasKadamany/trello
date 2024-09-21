import useFooterMenu from "@/hooks/useFooterMenu";

const exploreLinks = [
  { href: "/about-us", name: "About us" },
  { href: "/pricing", name: "Pricing" },
  { href: "/privacy", name: "Privacy" },
  { href: "/terms", name: "Terms and Conditions" },
];

export default function FooterExploreMore() {
  const { footerMenu } = useFooterMenu({
    menuTitle: "Explore More",
    menuLinks: exploreLinks,
  });

  return <>{footerMenu}</>;
}
