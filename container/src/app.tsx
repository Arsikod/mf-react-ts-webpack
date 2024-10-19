import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import { Header } from "../components/header";
import { MarketingApp } from "../components/marketing-app";

function Layout() {
  return (
    <main>
      <Header signedIn={false} onSignOut={() => console.log("Signed out")} />

      <Outlet />
    </main>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <MarketingApp />,
      },
      {
        path: "/pricing",
        element: <MarketingApp />,
      },
    ],
  },
]);

export default () => <RouterProvider router={router} />;
