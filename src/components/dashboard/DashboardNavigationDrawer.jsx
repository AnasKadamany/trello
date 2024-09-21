import { NavLink } from "react-router-dom";

const DashboardNavigationDrawer = () => {
  return (
    <div className="flex flex-col py-5 bg-gray-200 w-full items-center">
      <NavLink to={"subscription"}>Subscription</NavLink>
    </div>
  );
};

export default DashboardNavigationDrawer;
