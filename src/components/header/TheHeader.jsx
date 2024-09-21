import { useLocation } from "react-router-dom";

import TheNavBar from "./components/TheNavBar";
import TheAuthButtons from "./components/TheAuthButtons";
import TheMobileNavBar from "./components/TheMobileNavBar";

export default function TheHeader() {
  const { pathname } = useLocation();
  const isHomePage = pathname === "/";

  const largeScreenHeader = (
    <>
      <h1 className="uppercase font-bold tracking-wide">
        {isHomePage ? (
          <>
            so<span className="text-[#20CFC6]">konekt</span>
          </>
        ) : (
          <>sokonekt</>
        )}
      </h1>
      <TheNavBar />
      <TheAuthButtons />
    </>
  );

  return (
    <div className=" w-full">
      <div className="flex lg:hidden">
        <TheMobileNavBar />
      </div>
      <div className="hidden lg:flex lg:justify-between lg:items-center">
        {largeScreenHeader}
      </div>
    </div>
  );
}
