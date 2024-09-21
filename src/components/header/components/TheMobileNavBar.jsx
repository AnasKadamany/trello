import TheAuthButtons from "./TheAuthButtons";
import TheMobileNavlinks from "./TheMobileNavlinks";

export default function TheMobileNavBar() {
  return (
    <div className="flex justify-between items-center w-full">
      <TheMobileNavlinks />
      <h1 className="uppercase font-bold tracking-wide">sokonekt</h1>
      <div className="hidden md:flex"><TheAuthButtons /></div>
      <div className="flex md:hidden"></div>
    </div>
  );
}
