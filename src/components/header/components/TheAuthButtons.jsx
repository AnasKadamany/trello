import { NavLink } from "react-router-dom";
import { Button } from "../..//ui/button";

export default function TheAuthButtons() {
  return (
    <div className="flex gap-3">
      <Button
        variant="ghost"
        className="relative font-semibold text-[#001480] text-sm w-fit block after:block after:content-[''] after:bg-[#001480] after:absolute after:h-[2px] after:w-2/4 after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left"
      >
        <NavLink to={"/signin"}>Sign in</NavLink>
      </Button>
      <Button>
        <NavLink to={"/register"}>Get Started</NavLink>
      </Button>
    </div>
  );
}
