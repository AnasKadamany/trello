import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import TheHomePage from "./pages/TheHomePage";
import TheLoginPage from "./pages/auth-pages/TheLoginPage";
import TheRegisterPage from "./pages/auth-pages/TheRegisterPage";
import PricingPage from "./pages/PricingPage";
import DashboardPage from "./pages/auth-pages/DashboardPage";
import ManageSubscription from "./pages/auth-pages/ManageSubscription";
import { SubscriptionProvider } from "./context/useSubscriptionContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import DashboardLayout from "./pages/auth-pages/DashboardPage";

export default function App() {
  const isLoggedIn = false;
  const queryClient = new QueryClient()

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        {
          index: true,
          element: <TheHomePage />,
        },

        { path: "signin", element: <TheLoginPage /> },
        { path: "register", element: <TheRegisterPage /> },
        { path: "pricing", element: <PricingPage /> },
        { path: "dashboard", element: <DashboardLayout />, children: [
          {index: true, element: <ManageSubscription />}
        ] },
      ],
    },
  ]);
  return (
    <QueryClientProvider client={queryClient}>

    <SubscriptionProvider>
      <RouterProvider router={router} />
    </SubscriptionProvider>
    </QueryClientProvider>
  );
}
