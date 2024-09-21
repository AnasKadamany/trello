import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@radix-ui/react-label";
import { MdCheckCircle } from "react-icons/md";
import { Button, buttonVariants } from "../ui/button";
import { useSubscriptionContext } from "@/context/useSubscriptionContext";
import { NavLink } from "react-router-dom";

const PricingCard = ({ plan }) => {
  //   const isLoggedIn = true;
  const { icon, type, price, benefits, btnLabel } = plan;
  const { selectPlan } = useSubscriptionContext();

  const mappedBenefits = benefits?.map((benefit) => {
    return (
      <div key={benefit} className="flex flex-row items-center gap-x-1">
        <MdCheckCircle size={22} color="#35353F" />
        <Label key={benefit} className="flex text-base text-[#35353F]">
          {benefit}
        </Label>
      </div>
    );
  });

  return (
    <Card className="flex flex-col shadow-md shadow-gray-300">
      <CardHeader className="pb-3">
        <div className="flex flex-row gap-2 items-center">
          <Label>{icon}</Label>
          <CardTitle className="flex text-3xl text-[#0B0914]">{type}</CardTitle>
        </div>

        <CardDescription className="flex pt-2 text-lg tracking-wide">
          What You'll Get
        </CardDescription>
      </CardHeader>

      <CardContent className="">
        <div className="flex flex-col gap-y-5 border-b pb-4">
          {mappedBenefits}
        </div>

        <div className="flex items-center mt-2 mb-2">
          <h3 className="font-bold text-3xl">${price}</h3>
          <span className={`${price !== 0 ? "self-end text-lg" : "hidden"}`}>
            /year
          </span>
        </div>
      </CardContent>

      <CardFooter className="mt-auto pb-5">
        <Button
          variant={"sub"}
          size="lg"
          onClick={() => {
            selectPlan(type);
          }}
        >
          <NavLink to={"/register"}>

          {type === "Free" ? "Sign up for free" : "Buy now"}
          </NavLink>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
