import  { createContext, useContext, useState } from "react";

const SubscriptionContext = createContext();


export const SubscriptionProvider = ({ children }) => {
  // const isPremium = false;
  // const [selectedPlan, setSelectedPlan] = useState(
  //   !isPremium ? "Free" : "Premium"
  //   );

  const [selectedPlan, setSelectedPlan] = useState("Free")
    
    const selectPlan = (plan) => {
      setSelectedPlan(plan);
      console.log("Selected Plan", plan);
    };
    
    return (
      <SubscriptionContext.Provider
      value={{ selectedPlan, selectPlan }}
      >
      {children}
    </SubscriptionContext.Provider>
  );
};

export const useSubscriptionContext = () => useContext(SubscriptionContext);
