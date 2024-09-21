import { Routes, Route, Outlet } from "react-router-dom";
import ManageSubscription from "./ManageSubscription";
import TheDashboardHeader from "@/components/dashboard/TheDashboardHeader";
import TheToolbar from "@/components/dashboard/TheToolbar";

const DashboardLayout = () => {
  // <Routes>
  //   <Route path="subscription" element={<ManageSubscription />} />
  // </Routes>;

  return (
    <div className="flex items-center justify-center md:justify-start h-screen">
    <div className="hidden md:flex h-full relative left-0">
      <TheToolbar />
    </div>
    <section className="flex mx-auto">
      <Outlet />
    </section>
  </div>
  );
};

export default DashboardLayout;
