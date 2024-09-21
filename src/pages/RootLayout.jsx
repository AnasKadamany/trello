import TheFooter from "@/components/footer/TheFooter";
import TheHeader from "../components/header/TheHeader";
import { Outlet, useLocation } from "react-router-dom";
import TheMobileFooter from "@/components/footer/TheMobileFooter";
import DashboardNavigationDrawer from "@/components/dashboard/DashboardNavigationDrawer";
import TheDashboardHeader from "@/components/dashboard/TheDashboardHeader";

export default function RootLayout() {
  const isLoggedIn = false;
  const { pathname } = useLocation();
  const isDashboard = pathname === "/dashboard";

  return (
    <div className="flex flex-col">
      {isDashboard ? (
        <TheDashboardHeader />
      ) : (
        <header className="py-5 px-10 border-b">
          <TheHeader />
        </header>
      )}
      {isDashboard ? (
        <main className="h-screen bg-[#F2F2F2]">
          <Outlet />
        </main>
      ) : (
        <main className="flex justify-center items-center h-screen bg-[#F2F2F2]">
          <Outlet />
        </main>
      )}

      <footer className="relative bottom-0">
        <div className="flex md:hidden">
          <TheMobileFooter />
        </div>
        <div className="hidden md:flex">
          <TheFooter />
        </div>
      </footer>
    </div>
  );
}
