import { MdOutlineStar, MdDiamond } from "react-icons/md";
import PricingCard from "@/components/pricing/PricingCard";
import useSubscriptionSelection from "@/hooks/useSubscriptionSelection";
import { useSubscriptionContext } from "@/context/useSubscriptionContext";

const PricingPage = () => {
  const subscripionPlans = [
    {
      type: "Free",
      icon: <MdOutlineStar size={34} color="#0B0914" />,
      price: 0,
      benefits: [
        "Link up to 3 social media profiles.",
        "Post max 100 posts per month.",
      ],
      //   btnLabel: "Sign up for free",
    },

    {
      type: "Premium",
      icon: <MdDiamond size={34} color="#0B0914" />,
      price: 100,
      benefits: [
        "Link unlimited socal media profiles.",
        "Unlimited posts per month.",
        "Another benefit.",
        "More benefits.",
      ],
      //   btnLabel: "Buy now",
    },
  ];

  const mappedSubscriptionPlans = subscripionPlans.map((plan) => {
    return <PricingCard key={plan.type} plan={plan} />;
  });

  console.log();

  return (
    <div className="self-start mt-14">
      <div>
        <h1 className="text-[#231D4F] font-bold text-5xl text-center tracking-wide">
          Pricing
        </h1>

        <p className="italic text-xl font-light text-center mt-3">
          There's something for everyone, from individuals to agencies.
        </p>
      </div>

      <div className="flex gap-20 mt-16 justify-evenly">
        {mappedSubscriptionPlans}
      </div>
    </div>
  );
};

export default PricingPage;
