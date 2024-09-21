import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import FooterServices from "./components/FooterServices";
import FooterExploreMore from "./components/FooterExploreMore";
import FooterContact from "./components/FooterContact";
import FooterCompanyDetails from "./components/FooterCompanyDetails";

const accordionItems = [
  { title: "Our Services", component: <FooterServices /> },
  { title: "Explore More", component: <FooterExploreMore /> },
  { title: "Contact Details", component: <FooterContact /> },
];

export default function TheMobileFooter() {
  const mappedAccordionItems = accordionItems.map((item) => (
    <AccordionItem key={item.title} value={item.title}>
      <AccordionTrigger className="font-light text-sm">
        {item.title}
      </AccordionTrigger>
      <AccordionContent>{item.component}</AccordionContent>
    </AccordionItem>
  ));
  return (
    <div className="flex flex-col bg-blue-800 h-full w-full text-white px-14 py-14">
      <Accordion type="single" collapsible>
        {mappedAccordionItems}
      </Accordion>
      <div className="pt-10">
        <FooterCompanyDetails />
      </div>
      <p className="text-xs mt-8 pt-3 border-t">SOKONET 2023 © All rights reserved</p>
    </div>
  );
}
