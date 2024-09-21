// <<<<<<< HEAD
import { Button } from "@/components/ui/button";
import bgImage from "@/assets/images/homepage-bg.png";
import { Input } from "@/components/ui/input";

export default function TheHomePage() {
  return (
    <div className="flex justify-between px-5 max-w-7xl">
      <div className="flex flex-col max-w-xl">
        <h2 className="text-5xl font-bold leading-[56px] text-[#2B2B2B]">
          <span className="text-[#20CFC6]">Social Media</span>
          <br />
          Management
          <br />
          Simplified
        </h2>
        <p className="text-[#575757] py-6 w-[65%]">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="Your email address"
            className="w-72"
          />
          <Button type="submit">Subscribe</Button>
        </div>
      </div>
      <div>
        <img src={bgImage} />
      </div>
    </div>
  );
}
