import FooterCompanyDetails from "./components/FooterCompanyDetails";
import FooterServices from "./components/FooterServices";
import FooterExploreMore from "./components/FooterExploreMore";
import FooterContact from "./components/FooterContact";

export default function TheFooter() {
  return (
    <div className="bg-blue-800 h-full w-full text-white flex flex-col px-14">
      <div className="flex justify-between gap-8 w-full border-b py-6">
        <div>
          <FooterCompanyDetails />
        </div>
        <div className="flex justify-center gap-5 md:gap-14">
          <FooterServices />
          <FooterExploreMore />
          <FooterContact />
        </div>
      </div>
      <p className="text-xs pt-3 pb-5">SOKONET 2023 © All rights reserved</p>
    </div>
  );
}
