import { useState } from "react";

const useSubscriptionSelection = () => {
  const isPremium = false;

  const [selectedPlan, setSelectedPlan] = useState(
    !isPremium ? "Free" : "Premium"
  );

  const selectPlan = (plan) => {
    setSelectedPlan(plan);
    console.log("Selected Plan", plan);
  };

  return { selectedPlan, selectPlan, isPremium };
};

export default useSubscriptionSelection;
